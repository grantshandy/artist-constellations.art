<template>
  <div
    class="w-full inline-flex px-2 py-1 rounded-md bg-base02 space-x-3 select-none shadow-md items-center"
  >
    <div class="h-full flex-1">
      <p class="align-middle font-bold text-sm md:text-base">
        <span v-if="share">Other</span> User:
        {{ displayName.charAt(0).toUpperCase() + displayName.slice(1) }}
      </p>
    </div>
    <img
      v-if="me.images"
      :src="me.images[0].url"
      alt="Profile Picture"
      class="w-6 h-6 rounded-full"
    />
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: ["me"],
  data() {
    return {
      displayName: null,
      share: false,
    };
  },
  created() {
    if (this.me.displayName) {
      this.displayName = this.me.displayName;
      this.share = true;
    } else if (this.me.display_name) {
      this.displayName = this.me.display_name;
    }
  },
};
</script>
