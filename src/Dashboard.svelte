<script lang="ts">
  import { logout } from "./account";
</script>

<main class="min-h-screen p-3 bg-slate-900 text-slate-100">
  <h1>Welcome to Artist Constellations!</h1>
  <button class="button-1" on:click={logout}>Logout</button>
</main>
