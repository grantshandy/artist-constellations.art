<template>
  <!--
    Because this is a "web app" sort of thing there's no scrolling.
    The site always takes up the full size of the screen.
  -->
  <div class="w-screen h-screen flex">
    <LoginPage v-if="!userToken" :share-code="shareCode" class="grow" />
    <MainPage v-else class="grow" />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";

import { logout } from "./spotifyApi.js";

export default {
  name: "App",
  components: {
    LoginPage,
    MainPage,
  },
  data() {
    return {
      userToken: null,
      shareCode: null,
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
    let hash = window.location.hash.split("&")[0].split("=")[1];

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
    console.log(`User Token: ${this.userToken}`);

    // get sharecode from url
    let shareCode = window.location.search.split("=")[1];

    if (shareCode) {
      shareCode = shareCode.slice(0, 7);

      console.log(`Share Code: ${shareCode}`);

      localStorage.setItem("shareCode", shareCode);
      this.shareCode = shareCode;
    }
  },
};
</script>
