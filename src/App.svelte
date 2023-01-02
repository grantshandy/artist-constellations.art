<script lang="ts">
  import LoginPage from "./LoginPage.svelte";
  import Dashboard from "./Dashboard.svelte";

  import { manageAccessToken } from "./account";

  const accessToken = manageAccessToken(window.location);
</script>

<main class="bg-slate-900 text-slate-100">
  {#if !accessToken}
    <LoginPage />
  {:else}
    <Dashboard />
  {/if}
</main>
