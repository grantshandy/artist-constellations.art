<template>
  <div
    class="bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"
  >
    <div class="grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center">
      <div class="w-6/7 md:w-fit space-y-3">
        <div class="rounded-md shadow-2xl text-center p-4 bg-base03">
          <h1 class="text-3xl font-bold text-base1">Artist Constellations</h1>
          <p class="text-base0">
            View the artists you listen to on Spotify in a 3D constellations!
          </p>
          <a
            href="https://github.com/grantshandy/artist-constellations.art"
            class="text-base0 underline"
          >
            View Source Code
          </a>
          <p v-if="shareCode" class="text-base0 font-bold mt-2">
            Viewing Share Code {{ shareCode }}
            <span v-if="shareData"
              >for
              {{
                shareData.displayName.charAt(0).toUpperCase() +
                shareData.displayName.slice(1)
              }}</span
            >
          </p>
        </div>
        <div class="w-full flex flex-col space-y-2 shadow-lg hover:shadow-2xl">
          <button
            v-if="shareCode"
            v-on:click="removeShareCode"
            class="grow px-2 py-1 text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"
          >
            Remove Share Code
          </button>
          <button
            v-on:click="login"
            class="grow px-2 py-1 text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"
          >
            <span v-if="shareCode">Login to Compare Artists</span>
            <span v-else>Login</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShareData } from "../dbApi.js";

const clientId = "2ed0e6e8b06842fb854cb15e1690a7b5";
const scopes = "user-follow-read user-top-read";

export default {
  name: "LoginPage",
  data() {
    return {
      shareData: null,
      shareCode: null,
      shareCodeBuffer: null,
    };
  },
  async mounted() {
    this.shareCode = localStorage.getItem("shareCode");

    if (this.shareCode) {
      this.shareData = await getShareData(this.shareCode);
    }
  },
  methods: {
    login() {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}&scope=${scopes}&show_dialog=true`;
    },
    removeShareCode() {
      this.shareCode = null;
      localStorage.removeItem("shareCode");
    },
  },
};
</script>
