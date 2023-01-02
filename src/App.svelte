<script lang="ts">
  import LoginPage from "./LoginPage.svelte";
  import Dashboard from "./Dashboard.svelte";

  import { checkAccessToken } from "./account";

  const accessToken = checkAccessToken(window.location);
</script>

<main>
  {#if !accessToken}
    <LoginPage />
  {:else}
    <Dashboard />
  {/if}
</main>
