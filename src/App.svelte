<script lang="ts">
  import { spotifyApi, auth } from "./spotifyApi";
  import { fade } from "svelte/transition";

  import LoginPage from "./LoginPage.svelte";
  import Dashboard from "./Dashboard.svelte";

  auth();
</script>

<main class="min-h-screen">
  <!-- a really bad hack so the user doesn't see the login page of the first few frames of pageload -->
  {#if $spotifyApi != "init"}
    {#if $spotifyApi != null}
      <div in:fade class="absolute left-0 top-0">
        <Dashboard />
      </div>
    {:else}
      <LoginPage />
    {/if}
  {:else}
    <div
      out:fade={{ duration: 1000 }}
      class="absolute left-0 top-0 w-screen h-screen grid place-items-center"
    >
      <span
        class="h-10 w-10 block rounded-full border-4 border-slate-700 border-t-slate-100 animate-spin"
      />
    </div>
  {/if}
</main>

<style>
</style>
