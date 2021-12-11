const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read user-top-read';

var app = new Vue({
    el: '#app',

    data: {
        auth_key: null,
        me: {
            display_name: 'loading...'
        },
        nodes: [],
        links: [],
        graph: null,
        graphType: 'following',
        nodeType: 'dots',
        currentArtist: null,
        isMobile: false,
    },

    created() {
        // Get our authentication key from the URL
        this.auth_key = window.location.hash.substr(1).split('&')[0].split('=')[1];

        // If there was no authentication key in the URL
        if (this.auth_key) {
            localStorage.setItem('spotToken', this.auth_key);
            // Try to set it from localStorage
        } else {
            this.auth_key = localStorage.getItem('spotToken');
        }

        this.isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
    },

    async mounted() {
        if (this.auth_key) {
            this.setLoadingText('Getting User Information...');
            this.me = await this.getMe();
            await this.showGraph();
        }
    },

    destroyed() {
        window.removeEventListener('resize', this.resizeGraph);
    },

    methods: {
        // Redirect to spotify authentication page
        login: function() {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
        },

        // Logout by clearing the token from storage and setting it as null. This will make the login div the only thing visible.
        logout: function() {
            localStorage.removeItem('spotToken');
            window.location.href = window.location.href.split('?')[0].split('#')[0];
        },

        // Rebuild the graph with all of our settings
        showGraph: async function() {
            this.currentArtist = null;

            this.setLoadingText('Getting Artists...');
            if (this.graphType == 'following') {
                this.nodes = await this.getFollowing();
            } else if (this.graphType == 'last4weeks') {
                this.nodes = await this.getTimeRange('short_term');
            } else if (this.graphType == 'last6months') {
                this.nodes = await this.getTimeRange('medium_term');
            } else if (this.graphType == 'alltime') {
                this.nodes = await this.getTimeRange('long_term');
            }

            if (this.nodes.length == 0 || this.nodes.length == 1) {
                this.setLoadingText('You aren\'t following enough artists! Go follow some more people or switch to another mode.');
                return;
            }

            this.setLoadingText('Getting Relationships...');
            this.links = await this.buildRelationships(this.nodes);

            this.$refs['graph'].innerHTML = '';

            this.graph = ForceGraph3D();

            var width = this.$refs['graph'].clientWidth;
            var height = this.$refs['graph'].clientHeight;
            var backgroundColor = window.getComputedStyle(this.$refs['graph']).backgroundColor;
            var nodeColor = window.getComputedStyle(this.$refs['graph']).color;

            this.graph(this.$refs['graph'])
                .graphData(this)
                .showNavInfo(false)
                .enableNodeDrag(false)
                .width(width)
                .height(height)
                .backgroundColor(backgroundColor)
                .nodeColor(node => nodeColor)
                .linkWidth(2)
                .onNodeRightClick(node => {
                    window.open(`https://open.spotify.com/artist/${node.id}`, '_blank');
                });

            this.updateNodeType();

            this.graph.onNodeHover(node => {
                if (node) {
                    this.currentArtist = node;
                }
            });

            window.addEventListener('resize', this.resizeGraph);
        },

        // Set loading text
        setLoadingText: function(text) {
            this.$refs.graph.innerHTML = `<p class="m-4">${text}</p>`;
        },

        // Resize the graph to the size of it's parent div
        resizeGraph: function() {
            var width = this.$refs['graph'].clientWidth;
            var height = this.$refs['graph'].clientHeight;
    
            this.graph.width(width);
            this.graph.height(height);
        },

        // Set the graph's node type from the nodeType variable
        updateNodeType: function() {
            if (this.nodeType == 'pictures') {
                this.graph.nodeThreeObject(node => {
                    const imgTexture = new THREE.TextureLoader().load(node.img);
                    const material = new THREE.SpriteMaterial({ map: imgTexture });
                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(25, 25);
                    return sprite;
                });
    
            } else if (this.nodeType == 'text') {
                this.graph.nodeThreeObject(node => {
                    const sprite = new SpriteText(node.name);
                    sprite.backgroundColor = window.getComputedStyle(this.$refs['workspace']).backgroundColor;
                    sprite.color = window.getComputedStyle(this.$refs['graph']).color;
                    sprite.borderWidth = 4;
                    sprite.borderRadius = 4;
                    sprite.borderColor = window.getComputedStyle(this.$refs['workspace']).backgroundColor;
                    sprite.textHeight = 8;
                    return sprite;
                });

            } else if (this.nodeType == 'dots') {
                this.graph.nodeThreeObject(node => {});
            }
        },

        // Build the relationships between nodes
        buildRelationships: async function(nodes) {
            var links = new Array();
            var idArray = new Array();
            var currentArtist = 0;

            nodes.forEach(function(artist) {
                idArray.push(artist.id);
            });

            for await (const artist of nodes) {
                var relatedArtists = await this.getRelated(artist);
                for (const relatedArtist of relatedArtists) {
                    if (idArray.includes(relatedArtist.id)) {
                        var potentialConnection = { source: artist.id, target: relatedArtist.id };
                        var reversedPotentialConnection = { source: relatedArtist.id, target: artist.id };

                        if (!links.includes(potentialConnection) && !links.includes(reversedPotentialConnection)) {
                            links.push(potentialConnection);
                        }
                    }
                }

                currentArtist += 1;
                this.setLoadingText(`Building Relationships... (${currentArtist}/${idArray.length})`);
            }

            return links;
        },

        // Get the related artists from an artist
        getRelated: async function(artist) {
            return new Promise((resolve, reject) => {
                fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`, {
                    headers: {
                        'Authorization': `Bearer ${this.auth_key}`,
                    },
                })
                .then(response => response.json())
                .then(response => {
                    if (response.error) {
                        if (response.error.status = 401) {
                            app.logout();
                        }

                        this.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                        reject(response.error);
                    }
        
                    var relatedArtists = new Array ();

                    response.artists.forEach(function(artist) {
                        relatedArtists.push({ name: artist.name, id: artist.id });
                    }); 
            
                    resolve(relatedArtists)
                })
                .catch(error => reject(error));
            })
        },

        // Get our top artists of the past either short_term, medium_term, or long_term
        getTimeRange: async function(range) {
            return new Promise((resolve, reject) => {
                fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=50`, {
                    headers: {
                        'Authorization': `Bearer ${this.auth_key}`,
                    },
                })
                .then(response => response.json())
                .then(response => {
                    if (response.error) {
                        if (response.error.status == 401) {
                            app.logout();
                        }

                        this.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                        reject(response.error);
                    }

                    var artists = new Array ();

                    response.items.forEach(function(artist) {
                        artists.push({ name: artist.name, id: artist.id, genres: artist.genres, img: artist.images[Math.floor(artist.images.length / 2)].url });
                    });
        
                    resolve(artists)
                })
                .catch(error => reject(error));
            });
        },

        // Get who we follow
        getFollowing: async function() {
            var cursor = null;
            var totalFollowing = await get();

            while (cursor != null) {  
                var moreFollowing = await get(cursor);
                moreFollowing.forEach(function(x) {
                    totalFollowing.push(x);
                });
            }

            return totalFollowing;

            async function get(last) {
                var url;

                if (last == null) {
                    url = 'https://api.spotify.com/v1/me/following?type=artist&limit=50';
                } else {
                    url = `https://api.spotify.com/v1/me/following?type=artist&after=${last}&limit=50`;
                }

                return new Promise((resolve, reject) => {
                    fetch(url, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
                        },
                    })
                    .then(response => response.json())
                    .then(response => {
                        if (response.error) {
                            if (response.error.status = 401) {
                                app.logout();
                            }

                            this.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                            reject(response.error);
                        }

                        var artists = new Array ();
                        

                        response.artists.items.forEach(function(artist) {
                            artists.push({ name: artist.name, genres: artist.genres, id: artist.id, img: artist.images[Math.floor(artist.images.length / 2)].url });
                        });
                                
                        cursor = response.artists.cursors.after;
            
                        resolve(artists)
                    })
                    .catch(error => reject(error));
                });
            }
        },

        // Load information about the user
        getMe: async function() {
            return new Promise((resolve, reject) => {
                fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': `Bearer ${this.auth_key}`,
                    },
                })
                .then(response => response.json())
                .then(response => {
                    if (response.error) {
                        if (response.error.status == 401) {
                            app.logout();
                        }

                        this.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                        reject(response.error);
                    }
        
                    resolve(response)
                })
                .catch(error => reject(error));
            });
        },
    }
})