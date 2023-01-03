<script lang="ts">
  import { initSpotifyApi, spotify } from "./account";

  import LoginPage from "./LoginPage.svelte";
  import Dashboard from "./Dashboard.svelte";
    import { onMount } from "svelte";

  onMount(() => {
    initSpotifyApi();
  });
</script>

<main class="bg-slate-900 text-slate-100">
  {#if $spotify}
    <Dashboard />
  {:else}
    <LoginPage />
  {/if}
</main>
