<script lang="ts">
  import { spotify } from "./account";

  import LoginPage from "./LoginPage.svelte";
  import Dashboard from "./Dashboard.svelte";
</script>

<main class="bg-slate-900 text-slate-100">
  {#if $spotify}
    <Dashboard />
  {:else}
    <LoginPage />
  {/if}
</main>
