<script lang="ts">
	import { setShareCode, login } from "./account";
</script>

<main class="min-h-screen p-3 md:p-0">
	<div
		class="p-3 mx-auto md:w-2/3 lg:w-1/2 bg-slate-800 rounded-lg shadow-lg border border-slate-700 text-center space-y-2"
	>
		<h1 class="text-3xl font-bold">Artist Constellations</h1>
		<p>View and share your Spotify artists in constellations!</p>
		<div class="space-y-2 pt-3">
			<button class="button-1" on:click={login}>Login</button>
			<p class="select-none">or</p>
			<button class="button-1" on:click={setShareCode}>Enter Share Code</button>
		</div>
	</div>
</main>
