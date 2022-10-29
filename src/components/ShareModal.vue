<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid place-items-center"
  >
    <div class="rounded-md shadow-lg bg-base03 p-3 text-center text-base1">
      <h1 class="text-xl font-semibold">Share Your Graph</h1>
      <div v-if="shareModal.loading">
        <p>Loading: {{ shareModal.loading }}...</p>
      </div>
      <div v-else>
        <p>Your graph is now available at</p>
        <a class="select-none underline" :href="shareModal.url">{{
          shareModal.url
        }}</a>
      </div>
      <div class="w-full flow-root">
        <button
          v-on:click="linkToClipboard"
          class="float-left bg-base02 mt-4 px-2 py-1 rounded-md"
        >
          Copy to Clipboard
        </button>
        <button
          v-on:click="$emit('close')"
          class="float-right bg-base02 mt-4 px-2 py-1 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareModal",
  props: {
    shareModal: Object,
  },
  methods: {
    linkToClipboard() {
      navigator.clipboard.writeText(this.shareModal.url);
    },
  },
};
</script>
