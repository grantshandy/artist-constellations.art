<template>
  <div class="w-screen h-screen flex">
    <!-- main page -->
    <MainPage v-if="userToken" class="grow" />
    <!-- login page -->
    <LoginPage v-else class="grow" />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";

import { logout } from "./api.js";

export default {
  name: "App",
  components: {
    LoginPage,
    MainPage,
  },
  data() {
    return {
      userToken: null,
    };
  },

  created() {
    // if lastLogged in is more than an hour in the past then log out (because the token will have expired)
    if (localStorage.getItem("lastLoggedIn") != null) {
      let earlier = Date.parse(localStorage.getItem("lastLoggedIn"));
      let now = new Date();

      let diff = Math.abs(now - earlier);
      let minutes = Math.floor(diff / 1000 / 60);

      console.log(`Time since last login: ${minutes} minutes`);

      if (minutes >= 60) {
        localStorage.removeItem("lastLoggedIn");
        logout();
      }
    }

    // if we have a user token from a hash put it in local storage and reload page to clean up URL.
    // a bit hacky but whatever
    let hash = window.location.hash.split("#")[1];
    console.log(`url hash: ${hash}`);

    // redirect
    if (hash) {
      this.userToken = hash;

      localStorage.setItem("userToken", hash);
      localStorage.setItem("lastLoggedIn", new Date().toISOString());
    } else {
      // if it's not in the url then look for it in the localStorage
      this.userToken = localStorage.getItem("userToken");
    }

    // print the user token in the console
    console.log(`Temporary User Token: ${this.userToken}`);
  },
};
</script>
