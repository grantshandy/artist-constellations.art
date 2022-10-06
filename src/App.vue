<template>
  <div class="bg-base03 text-base0 w-screen h-screen flex">
    <!-- login page -->
    <LoginPage v-if="!userToken" />
    <div v-else>
      <!-- redirect page -->
      <RedirectPage v-if="redirecting" />
      <!-- main page -->
      <MainPage v-else class="w-screen h-screen" />
    </div>
  </div>
</template>

<script>
import RedirectPage from './components/RedirectPage.vue';
import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';

import { logout } from './api.js'

export default {
  name: 'App',
  components: {
    RedirectPage,
		LoginPage,
		MainPage,
  },
  data() {
    return {
      userToken: null,
      redirecting: false,
    }
  },

  created() {
    // if lastLogged in is more than an hour in the past then log out (because the token will have expired)
    if (localStorage.getItem('lastLoggedIn') != null) {
      let earlier = Date.parse(localStorage.getItem('lastLoggedIn'));
      let now = new Date();

      let diff = Math.abs(now - earlier);
      let minutes = Math.floor((diff / 1000) / 60);

      console.log(`Time since last login: ${minutes} minutes`);

      if (minutes >= 60) {
        localStorage.removeItem('lastLoggedIn');
        logout();
      }
    }

    // if we have a user token from a hash put it in local storage and reload page to clean up URL.
    // a bit hacky but whatever
    let hash = window.location.hash.split('&')[0].split('=')[1];

    // redirect
    if (hash) {
      this.redirecting = true;

      localStorage.setItem('userToken', hash);
      localStorage.setItem('lastLoggedIn', new Date().toISOString());

      window.location = window.location.href.split('?')[0].split('#')[0];
    } else {
      // if it's not in the url then look for it in the localStorage
      this.userToken = localStorage.getItem('userToken');
    }

    // print the user token in the console
    console.log(`User Token: ${this.userToken}`);
  },
}
</script>
