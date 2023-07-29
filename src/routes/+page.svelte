<script lang="ts">
	import ArtistGraph from '../ArtistGraph.svelte';

	import sampleData from '../assets/sample.json';

	let sampleNodes: { id: string }[] = [];

	sampleData.nodes.forEach((id) => {
		sampleNodes.push({ id });
	});
</script>

<div class="grow flex justify-center items-center">
	<div class="w-5/6 md:w-2/3 lg:w-1/2 p-3 space-y-3 bg-slate-300 rounded-md drop-shadow-xl">
		<h1 class="text-xl font-semibold text-center">Welcome to Artist Constellations!</h1>
		<div class="rounded-md bg-slate-400">
			<ArtistGraph nodes={sampleNodes} />
		</div>
		<div class="w-full flex justify-center">
			<button class="bg-slate-400 rounded-md px-2 py-1">Try It Out</button>
		</div>
	</div>
</div>
