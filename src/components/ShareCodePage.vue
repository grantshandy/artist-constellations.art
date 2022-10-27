<template>
  <div
    class="bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"
  >
    <div class="grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center">
      <div class="w-6/7 md:w-fit space-y-3">
        <div class="rounded-md shadow-2xl text-center p-4 bg-base03">
          <h1 class="text-3xl font-bold text-base1">
            Share Code {{ shareCode }}
          </h1>
        </div>
        <div class="w-full flex flex-col space-y-2">
          <button
            v-on:click="login"
            class="grow px-2 py-1 shadow-lg hover:shadow-2xl text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"
          >
            Login to Compare Your Artists
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const clientId = "2ed0e6e8b06842fb854cb15e1690a7b5";
const scopes = "user-follow-read user-top-read";

export default {
  name: "ShareCodePage",
  props: {
    shareCode: String,
  },
  created() {
    localStorage.setItem("shareCode", this.shareCode);
  },
  methods: {
    login() {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}&scope=${scopes}&show_dialog=true`;
    },
  },
};
</script>
