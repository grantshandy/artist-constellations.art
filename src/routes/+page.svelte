<script lang="ts">
	import ArtistGraph from '../ArtistGraph.svelte';
	import sampleData from '../assets/sample.json';
	import { userAccount } from '../data';

	const clientId = '2ed0e6e8b06842fb854cb15e1690a7b5';
	const scopes = 'user-follow-read user-top-read';

	const loginPageRedirect = () => {
		window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${
			window.location.origin + '/dashboard'
		}&scope=${scopes}&show_dialog=true`;
	};

	if ($userAccount) {
		window.location.href = '/dashboard';
	}
</script>

<div class="grow flex justify-center items-center">
	<div class="system-element p-3 text-center w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 space-y-3">
		<h1 class="text-xl font-semibold">Welcome to Artist Constellations</h1>
		<p>View your favorite artists on spotify in 3D constellations!</p>
		<ArtistGraph data={sampleData} demo={true} />
		<div class="w-full flex justify-center">
			<button
				class="bg-secondary-600 hover:bg-secondary-800 rounded-md font-bold px-2 py-1"
				on:click={loginPageRedirect}
			>
				Try It!
			</button>
		</div>
	</div>
</div>
