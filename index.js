const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href.split('?')[0].split('#')[0];
const scopes = 'user-follow-read';

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '#content',
    // ...
})

var app = new Vue({
    el: '#app',

    data: {
        auth_key: null
    },

    created() {
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

    methods: {
        // Redirect to spotify authentication page
        login: function() {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
        },

        // Logout by clearing the token from storage and redirecting to the page without any arguments in the URL
        logout: function() {
            localStorage.removeItem('spotToken');
            window.location.href = window.location.href.split('?')[0].split('#')[0];
        }
    }
})