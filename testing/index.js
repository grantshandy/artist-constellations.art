const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read';

var r = document.querySelector(':root');

var backgroundColor = '#393939';
var textColor = '#EEF0F2';

r.style.setProperty('--background', backgroundColor);
r.style.setProperty('--text', textColor);

var cursor = '';

var app = new Vue({
    el: '#app',

    data: {
        auth_key: null,
        me: {
            display_name: "loading user information..."
        },
        graph: null,
    },

    created() {
        // Get our authentication key from the URL
        this.auth_key = window.location.hash.substr(1).split('&')[0].split('=')[1];

        // If there was no authentication key in the URL
        if (!this.auth_key) {
            // Try to set it from localStorage
            this.auth_key = localStorage.getItem('spotToken');
        } else {
            // If we have it then set it in localStorage and get user info
            localStorage.setItem('spotToken', this.auth_key);
        }
    },

    async mounted() {
        if (this.auth_key) {
            this.me = await this.getMe();
            await this.showFollowing();
        }
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

        destroyed() {
            window.removeEventListener('resize', this.resizeGraph);
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

        // Show the data for our top artists of the past four weeks
        showPastFourWeeks: async function() {
            this.setLoadingText('getting nodes...');
            this.nodes = await this.getPastRange('short_term');
            this.setLoadingText('building relationships...');
            this.links = await this.buildRelationships(this.nodes);
            this.setLoadingText('building graph...');
            this.buildGraph();
        },

        // Show the data for our top artists of the past six months
        showPastSixMonths: async function() {
            this.setLoadingText('getting nodes...');
            this.nodes = await this.getPastRange('medium_term');
            this.setLoadingText('building relationships...');
            this.links = await this.buildRelationships(this.nodes);
            this.setLoadingText('building graph...');
            this.buildGraph();
        },

        // Show the data for our top artists of all time
        showAllTime: async function() {
            this.setLoadingText('getting nodes...');
            this.nodes = await this.getPastRange('long_term');
            this.setLoadingText('building relationships...');
            this.links = await this.buildRelationships(this.nodes);
            this.setLoadingText('building graph...');
            this.buildGraph();
        },

        // Show the results for our search
        showSearch: async function(event) {
            // clever :) we check to see if the event is a keypress so we can call this from the text box and submit button.
            if (event.key) {
                if(event.key === "Enter"){
                    await run();
                }
            } else {
                await run();
            }

            async function run() {
                app.setLoadingText('getting nodes...');
                app.nodes = await app.searchArtist(app.$refs['searchText'].innerHTML);
                app.setLoadingText('building relationships...');
                app.links = await app.buildRelationships(app.nodes);
                app.setLoadingText('building graph...');
                app.buildGraph();
            }
        },

        // Create a graph from nodes and links
        buildGraph: function() {
            this.$refs['loading'].innerHTML = '';
            this.$refs['graph'].innerHTML = '';

            var innerGraph = document.createElement('div');
            this.$refs['graph'].appendChild(innerGraph);

            this.graph = ForceGraph3D();

            this.graph(innerGraph)
                .graphData({ nodes: this.nodes, links: this.links })
                .enableNodeDrag(false)
                .showNavInfo(false)
                .enablePointerInteraction(false)
                .onNodeRightClick(node => {
                    window.open(`https://open.spotify.com/artist/${node.id}`, '_blank');
                })
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

            window.addEventListener('resize', this.resizeGraph);
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
            this.$refs['loading'].innerHTML = `<p class="loadingText">${text}</p>`;
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
                        if (response.error.status == 401) {
                            app.logout();
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
                            app.logout();
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

        // Get our top 50 artists within a certain range
        getPastRange: async function(range) {
            var artists = await get(range);

            return artists;

            async function get(range) {
                return new Promise((resolve, reject) => {
                    fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=50&offset=0`, {
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

                            console.error(response.error);
                            reject(response.error);
                        }

                        var artists = new Array ();

                        response.items.forEach(function(artist) {
                            artists.push({ name: artist.name, id: artist.id, img: artist.images[Math.floor(artist.images.length / 2)].url });
                        });

                        resolve(artists)
                    })
                    .catch(error => reject(error));
                })
            }
        },

        searchArtist: async function(search) {
            return new Promise((resolve, reject) => {
                fetch(`https://api.spotify.com/v1/search?q=artist%3A${search}&type=artist&limit=1`, {
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

                        console.error(response.error);
                        reject(response.error);
                    }

                    console.log(response);

                    resolve([{ name: response.artists.items[0].name, id: response.artists.items[0].id, img: response.artists.items[0].images[Math.floor(artist.images.length / 2)].url}])
                })
                .catch(error => reject(error));
            })
        },

        // Get who we follow
        getFollowing: async function() {
            this.genres = [];

            var totalFollowing = await get();
            while (cursor != null) {  
                var moreFollowing = await get(cursor);
                moreFollowing.forEach(function(x) {
                    totalFollowing.push(x);
                });
            }

            this.following = totalFollowing;

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