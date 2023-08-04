<svelte:head>
	<title>Artist Constellations</title>
</svelte:head>

<script lang="ts">
	import Graph from '$lib/Graph.svelte';
	import sampleData from '$lib/../assets/sample.json';
	import { NodeStyle } from '$lib';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="max-w-xs rounded-lg h-64 md:h-96">
			<Graph data={sampleData} demo={true} nodeStyle={NodeStyle.Dot} />
		</div>
		<div>
			<h1 class="text-5xl font-bold">Artist Constellations</h1>
			<p class="py-6">View the artists you listen to on Spotify in 3D constellations.</p>
			<div class="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center">
				<div class="md:inline-block md:space-x-3 grow">
					<a href="/dashboard" class="btn btn-primary">Get Started</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/grantshandy/artist-constellations.art"
						class="btn">View on Github</a
					>
				</div>
				<ThemeSwitcher />
			</div>
		</div>
	</div>
</div>
