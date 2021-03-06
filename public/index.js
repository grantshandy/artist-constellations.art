const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
let redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read user-top-read';

const app = new Vue({
    el: '#app',

    data: {
        auth_key: null,
        me: {
            display_name: 'loading...'
        },
        nodes: [],
        links: [],
        genres: [],
        graph: null,
        graphType: 'following',
        numGenres: null,
        nodeType: 'dots',
        currentArtist: null,
        mostPopularArtist: null,
        leastPopularArtist: null,
        isMobile: false,
        numArtists: null,
        numFollowing: null,
        colorByPopularity: false,
        averagePopularity: null,
        searchQuery: null,
        queryId: null,
        shareCode: null,
        shareCodeData: null,
    },

    created() {
        // Check to see if we are getting this from a share URL.
        if (window.location.search.includes('share')) {
            this.shareCode = window.location.search.split('=')[1].toUpperCase();
        } else if (localStorage.getItem('shareCode')) {
            // Check to see if we have the share code in localStorage because we set it there to keep it during the redirect.
            this.shareCode = localStorage.getItem('shareCode');
            localStorage.removeItem('shareCode');
        }

        console.log('shareCode: '+this.shareCode);

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
            if (this.shareCode) {
                localStorage.setItem('shareCode', this.shareCode);
            }

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

            if (!this.graphType.includes('term') && this.shareCode) {
                this.setLoadingText('Getting The Other User\'s Artists');
                this.shareCodeData = await this.getGraph(this.shareCode);
                this.graphType = this.shareCodeData.graphType;
            }

            // Get our artists based on our current settings.
            this.setLoadingText('Getting Artists...');
            if (this.graphType == 'following') {
                this.nodes = await this.getFollowing();
            } else if (this.graphType == 'search') {
                let searchNodes = await this.searchArtist(this.searchQuery);
                if (!searchNodes) {
                    this.setLoadingText('Search for an artist!');
                    return;
                } else {
                    this.nodes = searchNodes;
                }
            } else if (this.graphType.includes('term')) {
                this.nodes = await this.getTimeRange(this.graphType);
            }

            if (!this.graphType.includes('term') && this.shareCode && this.shareCodeData.user != this.me.display_name) {
                this.nodes = this.combineNodes(this.nodes, this.shareCodeData.nodes);
            } else {
                this.shareCode = null;
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

            let width = this.$refs['graph'].clientWidth;
            let height = this.$refs['graph'].clientHeight;
            let backgroundColor = window.getComputedStyle(this.$refs['graph']).backgroundColor;

            this.graph(this.$refs['graph'])
                .graphData(this)
                .showNavInfo(false)
                .width(width)
                .height(height)
                .enableNodeDrag(false)
                .backgroundColor(backgroundColor)
                .linkWidth(2)
                .nodeRelSize(7)
                .nodeLabel('name')
                .onNodeRightClick(node => {
                    this.viewRelated(node);
                })
                .onNodeHover(node => {
                    if (node) {
                        this.currentArtist = node;
                    }
                });

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
            let width = this.$refs['graph'].clientWidth;
            let height = this.$refs['graph'].clientHeight;
    
            this.graph.width(width);
            this.graph.height(height);
        },

        // Get average popularity
        getAveragePopularity: function() {
            let total = 0;
            let count = 0;

            this.nodes.forEach(function(artist) {
                total += artist.popularity;
                count++;
            });

            let average = total / count;

            this.mostPopularArtist = { popularity: average };
            this.leastPopularArtist = { popularity: average };

            this.nodes.forEach(function(artist) {
                if (artist.popularity >= app.mostPopularArtist.popularity) {
                    app.mostPopularArtist = artist;
                } else if (artist.popularity <= app.leastPopularArtist.popularity) {
                    app.leastPopularArtist = artist;
                }
            });

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
                    sprite.color = window.getComputedStyle(this.$refs['graph']).color;
                    sprite.borderColor = window.getComputedStyle(this.$refs['workspace']).backgroundColor;
                    sprite.backgroundColor = window.getComputedStyle(this.$refs['workspace']).backgroundColor;
                    sprite.borderWidth = 4;
                    sprite.borderRadius = 4;
                    sprite.textHeight = 8;

                    if (node.isCenter) {
                        sprite.borderColor = window.getComputedStyle(this.$refs['logoutButton']).backgroundColor;
                        sprite.backgroundColor = window.getComputedStyle(this.$refs['logoutButton']).backgroundColor;
                    }

                    return sprite;
                });

            } else if (this.nodeType == 'dots') {
                this.graph.nodeThreeObject(node => {});
            }
        },

        // Switch between the colors for the nodes.
        updateNodeColor: function() {
            let nodeColor = window.getComputedStyle(this.$refs['graph']).color;

            this.graph.nodeColor(node => {
                if (this.colorByPopularity) {
                    let hue = node.popularity;
                    let saturation = node.popularity;

                    hue = (saturation / 100) * 360;

                    return `hsl(${hue},${saturation}%,50%)`;
                } else if (this.shareCode) {
                    let yourColor = window.getComputedStyle(this.$refs['logoutButton']).backgroundColor;
                    let theirColor = window.getComputedStyle(this.$refs['logoutButton']).color;
                    let sharedColor = 'blue';

                    if (node.foreign) {
                        return theirColor;
                    } else if (node.shared) {
                        return sharedColor;
                    } else {
                        return yourColor;
                    }
                } else {
                    if (node.isCenter) {
                        return window.getComputedStyle(this.$refs['logoutButton']).backgroundColor;
                    }

                    return nodeColor;
                }
            });
        },

        // Build the relationships between nodes
        buildRelationships: async function(nodes) {
            if (this.graphType != 'search') {
                let storageRelationships = localStorage.getItem(`${this.me.display_name}-${this.graphType}`);
                if (storageRelationships) {
                    storageRelationships = JSON.parse(storageRelationships);
    
                    if (storageRelationships.nodes == this.nodes) {
                        return storageRelationships.links;
                    }
                }
            }

            let links = new Array();
            let idArray = new Array();

            nodes.forEach(function(artist) {
                idArray.push(artist.id);
            });

            let currentArtist = 0;

            for await (const artist of nodes) {
                currentArtist += 1;
                this.setLoadingText(`Building Relationships... (${currentArtist}/${idArray.length})`);

                let relatedArtists = await this.getRelated(artist);
                for (const relatedArtist of relatedArtists) {
                    if (idArray.includes(relatedArtist.id)) {
                        let potentialConnection = { source: artist.id, target: relatedArtist.id };
                        let reversedPotentialConnection = { source: relatedArtist.id, target: artist.id };

                        if (!links.includes(potentialConnection) && !links.includes(reversedPotentialConnection)) {
                            links.push(potentialConnection);
                        }
                    }
                } 
            }

            try {
                localStorage.setItem(`${this.me.display_name}-${this.graphType}`, JSON.stringify({ name: this.me.display_name, links, nodes }));
            } catch {
                localStorage.clear();
                localStorage.setItem('spotToken', this.auth_key);
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
        
                    let relatedArtists = new Array ();

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

                    let artists = new Array ();

                    response.items.forEach(function(artist) {
                        artists.push(app.convertArtist(artist));
                    });
        
                    resolve(artists)
                })
                .catch(error => reject(error));
            });
        },

        // Search for an artist and return their related artists to the second degree.
        searchArtist: async function(query) {
            if (query == '' || query == ' ' || query == null) {
                return;
            }

            let artists = new Array ();

            this.setLoadingText('Searching...');

            let centralArtist = await search(query);
            artists.push(centralArtist);

            this.setLoadingText('Getting Related Artists');
            let centralRelatedArtists = await this.getRelated(centralArtist);
            this.setLoadingText('Updating Artist Information');
            let related = await this.getArtists(centralRelatedArtists);

            // Why do I do this I hate this
            related.forEach(function(artist) {
                artists.push(artist);
            });

            // Atleast it's better than doing this.
            // let currentNum = 0;
            // for await (const artist of centralRelatedArtists) {
            //     currentNum += 1;
            //     this.setLoadingText(`Getting Related Artists... (${currentNum}/${centralRelatedArtists.length})`);

            //     let currentFirstDegreeArtist = await this.getArtist(artist.id);
            //     artists.push(currentFirstDegreeArtist);
            // }

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
    
                            console.log(response.error);
                            app.setLoadingText(`Couldn\'t connect to spotify, try checking your network connection: ${response.error}`);
                            reject(response.error);
                        }
        
                        let artist = response.artists.items[0];

                        artist = app.convertArtist(artist);
                        artist.isCenter = true;
            
                        resolve(artist);
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

                        console.log(response.error);

                        app.setLoadingText('Couldn\'t connect to spotify, try checking your network connection');
                        reject(response.error);
                    }
            
                    resolve(app.convertArtist(response));
                })
                .catch(error => reject(error));
            });
        },

        // Get who we follow
        getFollowing: async function() {
            let cursor = null;
            let totalFollowing = await get();

            while (cursor != null) {  
                let moreFollowing = await get(cursor);
                moreFollowing.forEach(function(x) {
                    totalFollowing.push(x);
                });
            }

            totalFollowing.forEach(function(artist) {
                artist.genres.forEach(function(genre) {
                    if (!app.genres.includes(genre)) {
                        app.genres.push(genre);
                    }
                });
            });

            this.numGenres = this.genres.length;
            this.numFollowing = totalFollowing.length;

            return totalFollowing;

            async function get(last) {
                let url;

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

                        let artists = new Array ();

                        response.artists.items.forEach(function(artist) {
                            artists.push(app.convertArtist(artist))
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

        // Get multiple artists from an array of artists that atleast have ids.
        getArtists: async function(artists) {
            let idString = '';

            artists.forEach(function(artist) {
                idString += artist.id + ',';
            });

            idString = idString.slice(0, -1);

            return new Promise((resolve, reject) => {
                fetch(`https://api.spotify.com/v1/artists?ids=${idString}`, {
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

                    let artists = new Array ();

                    response.artists.forEach(function(artist) {
                        artists.push(app.convertArtist(artist));
                    })
        
                    resolve(artists);
                })
                .catch(error => reject(error));
            }); 
        },

        // Spotify uses a very complex schema for representing artists so we do this for simplicity.
        convertArtist: function(artist) {
            let name = artist.name;
            let genres = artist.genres;
            let id = artist.id;
            let popularity = artist.popularity;

            const img = artist?.images[0]?.url ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png';

            return { name, genres, id, img, popularity };
        },

        // This allows us to search when the enter button is clicked in the search bar.
        searchCallback: async function(event) {
            if (event.code == "Enter") {
                await this.showGraph();
            }
        },

        // View the related artists from the sidebar.
        viewRelated: async function(currentArtist) {
            this.graphType = 'search';
            this.searchQuery = currentArtist.name;
            this.queryId = currentArtist.id;
            await this.showGraph();
        },

        uploadGraph: async function() {
            let newNodes = new Array();

            this.nodes.forEach(function(node) {
                newNodes.push({ name: node.name, genres: node.genres, id: node.id, img: node.img, popularity: node.popularity });
            });

            let url = `${redirect_uri}upload`;
            console.log(`uploading to ${url}`);

            let body = JSON.stringify({ user: app.me.display_name, graphType: app.graphType, nodes: newNodes });
            console.log(body);

            return new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'post',
                    body: body,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                })
                .then(response => response.json())
                .then(response => resolve(response.code))
                .catch(error => reject(error));
            });
        },

        getGraph: async function(code) {
            return new Promise((resolve, reject) => {
                fetch(`${redirect_uri}data/${code}`, {
                    method: 'get',
                })
                .then(response => response.json())
                .then(response => resolve(response))
                .catch(error => reject(error));
            });
        },

        combineNodes: function(userNodes, foreignNodes) {
            // Create and id array for both current and foreign nodes.
            let userNodeIdArray = new Array ();
            let foreignNodeIdArray = new Array ();
            let finalIdArray = new Array ();
            let finalArray = new Array ();

            userNodes.forEach(function(node) {
                userNodeIdArray.push(node.id);
            });

            foreignNodes.forEach(function(node) {
                foreignNodeIdArray.push(node.id);
            });
            
            // Go through all the nodes and assign them properties for their colors;
            foreignNodes.forEach(function(node) {
                if (userNodeIdArray.includes(node.id) && foreignNodeIdArray.includes(node.id)) {
                    node.shared = true;
                } else {
                    node.foreign = true;
                }

                finalIdArray.push(node.id);
                finalArray.push(node);
            });

            userNodes.forEach(function(node) {
                if (userNodeIdArray.includes(node.id) && foreignNodeIdArray.includes(node.id)) {
                    node.shared = true;
                }

                if (!finalIdArray.includes(node.id)) {
                    finalArray.push(node);
                }
            });

            return finalArray;
        },
    }
})