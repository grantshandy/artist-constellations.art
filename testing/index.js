const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read';

var cursor = '';

var app = new Vue({
    el: '#app',

    data: {
        auth_key: null,
        me: {
            display_name: 'Loading User Information...'
        },
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
    },

    async mounted() {
        if (this.auth_key) {
            this.me = await this.getMe();
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
    }
})