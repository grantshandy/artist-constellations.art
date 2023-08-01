<script lang="ts">
	import Graph from '$lib/Graph.svelte';
	import sampleData from '../assets/sample.json';
</script>

<div class="w-full flex flex-col text-center space-y-3">
	<main class="p-4">
		<h1 class="text-xl font-semibold">Welcome to Artist Constellations</h1>
		<p>View your favorite artists on spotify in 3D constellations!</p>
	</main>
	<div class="h-96 flex">
		<Graph data={sampleData} demo={true} />
	</div>
	<div class="w-full flex justify-center">
		<a
			class="rounded-md font-bold px-2 py-1"
			href="/dashboard"
		>
			Try It!
		</a>
	</div>
</div>
