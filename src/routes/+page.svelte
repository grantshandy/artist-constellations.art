<script lang="ts">
	import Graph from '$lib/Graph.svelte';
	import sampleData from '$lib/../assets/sample.json';
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
		<div class="max-w-xs rounded-lg shadow-2xl h-96">
			<Graph data={sampleData} demo={true} />
		</div>
    <div>
      <h1 class="text-5xl font-bold">Artist Constellations</h1>
      <p class="py-6">View the artists you listen to on Spotify in 3D constellations.</p>
      <a href="/dashboard" class="btn btn-primary">Get Started</a>
    </div>
  </div>
</div>
