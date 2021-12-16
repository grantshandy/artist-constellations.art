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
        numArtists: null,
        numFollowing: null,
        colorByPopularity: false,
        averagePopularity: null,
        testing: false,
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

            // Get our artists based on our current settings.
            this.setLoadingText('Getting Artists...');
            if (this.graphType == 'following') {
                this.nodes = await this.getFollowing();
            } else if (this.graphType == 'search') {
                this.nodes = await this.searchArtist('Andy Shauf');
            } else {
                this.nodes = await this.getTimeRange(this.graphType);
            }

            // If we don't have any artists or only one we need to tell them to go get more users.
            if (this.nodes.length == 0 || this.nodes.length == 1) {
                this.setLoadingText('You aren\'t following enough artists! Go follow some more people or switch to another mode.');
                // We set the graph to an empty string so they can still change to another setting.
                this.graph = ' ';
                return;
            }

            // Set our average popularity
            this.averagePopularity = this.getAveragePopularity();

            // Build our links for the nodes
            this.setLoadingText('Getting Relationships...');
            this.links = await this.buildRelationships(this.nodes);

            // Clear the graph div.
            this.$refs['graph'].innerHTML = '';

            this.graph = ForceGraph3D();

            var width = this.$refs['graph'].clientWidth;
            var height = this.$refs['graph'].clientHeight;
            var backgroundColor = window.getComputedStyle(this.$refs['graph']).backgroundColor;

            this.graph(this.$refs['graph'])
                .graphData(this)
                .showNavInfo(false)
                .width(width)
                .height(height)
                .enableNodeDrag(false)
                .backgroundColor(backgroundColor)
                .linkWidth(2)
                .nodeRelSize(7)
                .onNodeRightClick(node => {
                    window.open(`https://open.spotify.com/artist/${node.id}`, '_blank');
                })
                .onNodeHover(node => {
                    if (node) {
                        this.currentArtist = node;
                    }
                });
                // .d3Force('charge').strength(-100);

            this.updateNodeType();
            this.updateNodeColor();

            if (this.graphType == 'search') {
                this.graph.d3Force('charge').strength(-300);
            }

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

        // Get average popularity
        getAveragePopularity: function() {
            var total = 0;
            var count = 0;

            this.nodes.forEach(function(artist) {
                total += artist.popularity;
                count++;
            });

            var average = total / count;

            return Math.round(average);
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

        // Switch between the colors for the nodes.
        updateNodeColor: function() {
            var nodeColor = window.getComputedStyle(this.$refs['graph']).color;

            this.graph.nodeColor(node => {
                if (this.colorByPopularity) {
                    var hue = node.popularity;
                    var saturation = node.popularity;

                    hue = (saturation / 100) * 360;

                    return `hsl(${hue},${saturation}%,50%)`;
                } else {
                    return nodeColor;
                }
            });
        },

        // Build the relationships between nodes
        buildRelationships: async function(nodes) {
            var links = new Array();
            var idArray = new Array();

            nodes.forEach(function(artist) {
                idArray.push(artist.id);
            });

            var currentArtist = 0;

            for await (const artist of nodes) {
                currentArtist += 1;
                this.setLoadingText(`Building Relationships... (${currentArtist}/${idArray.length})`);

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
                        artists.push({ name: artist.name, id: artist.id, genres: artist.genres, img: artist.images[Math.floor(artist.images.length / 2)].url, popularity: artist.popularity });
                    });
        
                    resolve(artists)
                })
                .catch(error => reject(error));
            });
        },

        // Search for an artist and return their related artists to the second degree.
        searchArtist: async function(query) {
            var artists = new Array ();

            this.setLoadingText('Searching...');

            var centralArtist = await search(query);
            artists.push(centralArtist);

            var centralRelatedArtists = await this.getRelated(centralArtist);
            var currentNum = 0;

            for await (const artist of centralRelatedArtists) {
                currentNum += 1;
                this.setLoadingText(`Getting related artists... (${currentNum}/${centralRelatedArtists.length})`);

                var currentFirstDegreeArtist = await this.getArtist(artist.id);
                artists.push(currentFirstDegreeArtist);
            }

            return artists;

            async function search(query) {
                return new Promise((resolve, reject) => {
                    fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
                        headers: {
                            'Authorization': `Bearer ${app.auth_key}`,
                        },
                    })
                    .then(response => response.json())
                    .then(response => {
                        if (response.error) {
                            if (response.error.status == 401) {
                                app.logout();
                            }
    
                            app.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                            reject(response.error);
                        }
        
                        var artist = response.artists.items[0];
            
                        resolve({ name: artist.name, id: artist.id, genres: artist.genres, img: artist.images[Math.floor(artist.images.length / 2)].url, popularity: artist.popularity });
                    })
                    .catch(error => reject(error));
                });
            }
        },

        // Get info about an artist, namely their genres and pictures, things that getRelated can't do.
        getArtist: async function(id) {
            return new Promise((resolve, reject) => {
                fetch(`https://api.spotify.com/v1/artists/${id}`, {
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

                        app.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                        reject(response.error);
                    }
    
                    var artist = response;
        
                    resolve({ name: artist.name, id: artist.id, genres: artist.genres, img: artist.images[Math.floor(artist.images.length / 2)].url, popularity: artist.popularity });
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

            var genres = new Array ();
            totalFollowing.forEach(function(artist) {
                artist.genres.forEach(function(genre) {
                    genres.push(genre);
                });
            });

            this.numGenres = genres.length;
            this.numFollowing = totalFollowing.length;

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
                            artists.push({ name: artist.name, genres: artist.genres, id: artist.id, img: artist.images[Math.floor(artist.images.length / 2)].url, popularity: artist.popularity });
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