<template>
  <div
    class="w-full flow-root px-2 py-1 rounded-md bg-base02 space-x-3 select-none shadow-md items-center"
  >
    <p class="float-left align-middle font-bold text-sm md:text-base">
      User:
      {{ me.display_name.charAt(0).toUpperCase() + me.display_name.slice(1) }}
    </p>
    <img
      :src="me.images[0].url"
      alt="Profile Picture"
      class="float-right w-6 h-6 rounded-full"
    />
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: ["me"],
};
</script>
