const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read';

var r = document.querySelector(':root');

var backgroundColor = '#363636';
var textColor = '#EEF0F2';

r.style.setProperty('--background', backgroundColor);
r.style.setProperty('--text', textColor);

var cursor = '';

var app = new Vue({
    el: '#app',

    data: {
        graphType: 'following',
        auth_key: null,
        me: null,
        nodes: [],
        links: [],
        genres: [],
        nodeType: 'dots',
        graph: null,
    },

    async created() {
        // Get our authentication key from the URL
        this.auth_key = window.location.hash.substr(1).split('&')[0].split('=')[1];

        // If there was no authentication key in the URL
        if (!this.auth_key) {
            // Try to set it from localStorage
            this.auth_key = localStorage.getItem('spotToken');
        } else {
            // If we have it then set it in localStorage
            localStorage.setItem('spotToken', this.auth_key);
        }
    },

    async mounted() {
        if (this.auth_key) {
            await this.showFollowing();
            this.me = await this.getMe();
            this.$refs['username'].innerHTML = `<em>User: ${this.me.display_name}</em>`;
        }
    },

    destroyed() {
        window.removeEventListener("resize", this.resizeGraph);
    },

    methods: {
        // Go to the authentication page to generate a new token
        authenticate: function() {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
        },

        // Remove our token and log out
        logout: function() {
            localStorage.removeItem('spotToken');
            window.location.href = window.location.href.split('#')[0];
        },

        // Run a graph that shows your artists
        showFollowing: async function() {
            this.setLoadingText('getting nodes...');
            this.nodes = await this.getFollowing();
            this.setLoadingText('building relationships...');
            this.links = await this.buildRelationships(this.nodes);
            this.setLoadingText('building graph...');
            this.buildGraph();
        },

        // Create a graph from nodes and links
        buildGraph: function() {
            this.$refs['graph'].innerHTML = '';

            var innerGraph = document.createElement('div');
            this.$refs['graph'].appendChild(innerGraph);

            this.graph = ForceGraph3D();

            this.graph(innerGraph)
                .graphData({ nodes: this.nodes, links: this.links })
                .enableNodeDrag(false)
                .showNavInfo(false)
                .enablePointerInteraction(false)
                .linkWidth(2)
                .nodeColor(node => textColor)
                .width(this.$refs['graph'].clientWidth)
                .height(this.$refs['graph'].clientHeight)
                .backgroundColor(backgroundColor);

            if (this.nodeType == 'text') {
                this.setGraphAsText();
            } else if (this.nodeType == 'images') {
                this.setGraphAsImage();
            } else if (this.nodeType == 'dots') {
                this.setGraphAsDot();
            }

            this.graph.d3Force('charge').strength(-100);

            window.addEventListener("resize", this.resizeGraph);
        },

        // Resize the graph when the window is resized
        resizeGraph: function() {
            this.graph.width(this.$refs['graph'].clientWidth);
            this.graph.height(this.$refs['graph'].clientHeight)
        },

        // Set nodes on the graph as dots.
        setGraphAsDot: function() {
            this.nodeType = 'dots';

            this.graph.nodeThreeObject(node => {});
            this.graph.enablePointerInteraction(true);
        },

        // Set nodes on the graph as the name of the artist.
        setGraphAsText: function() {
            this.nodeType = 'text';

            this.graph.nodeThreeObject(node => {
                const sprite = new SpriteText(node.name);
                sprite.material.depthWrite = false; // make sprite background transparent
                sprite.color = textColor;
                sprite.textHeight = 8;
                return sprite;
            });

            this.graph.enablePointerInteraction(false);
        },

        // Set nodes on the graph as an image of the artist.
        setGraphAsImage: function() {
            this.nodeType = 'images';

            this.graph.nodeThreeObject(node => {
                const imgTexture = new THREE.TextureLoader().load(node.img);
                const material = new THREE.SpriteMaterial({ map: imgTexture });
                const sprite = new THREE.Sprite(material);
                sprite.scale.set(25, 25);
                return sprite;
            });

            this.graph.enablePointerInteraction(true);
        },

        // Set the loading text and print it to the console
        setLoadingText: function(text) {
            this.$refs['graph'].innerHTML = `<p class="loadingText">${text}</p>`;
        },

        // Build the relationships between nodes
        buildRelationships: async function(nodes) {
            var links = new Array();
            var idArray = new Array();

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
            }

            return links;
        },

        // Get information about the user
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
                        if (response.error.status = 401) {
                            this.logout();
                        }

                        console.error(response.error);
                        reject(response.error);
                    }
        
                    resolve(response)
                })
                .catch(error => reject(error));
            })
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
                            this.logout();
                        }

                        console.error(response.error);
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

        // Get who we follow
        getFollowing: async function() {
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
                                this.logout();
                            }

                            console.error(response.error);
                            reject(response.error);
                        }

                        var artists = new Array ();

                        response.artists.items.forEach(function(artist) {
                            artist.genres.forEach(function(genre) {
                                if (!app.genres.includes(genre)) {
                                    app.genres.push(genre);
                                }
                            });

                            artists.push({ name: artist.name, id: artist.id, img: artist.images[Math.floor(artist.images.length / 2)].url });
                        });
                                
                        cursor = response.artists.cursors.after;
            
                        resolve(artists)
                    })
                    .catch(error => reject(error));
                })
            }      
        }
    }
})