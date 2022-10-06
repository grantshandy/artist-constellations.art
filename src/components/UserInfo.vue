<template>
    <div class="w-full flow-root px-2 py-1 rounded-md bg-base01 space-x-3 text-base03 font-bold select-none">
        <p class="float-left text-base03 font-bold">User: {{ me.display_name.charAt(0).toUpperCase() + me.display_name.slice(1) }}</p>
        <img :src="me.images[0].url" alt="Profile Picture" class="float-right w-6 h-6 rounded-full">
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: ['me'],
}
</script>
