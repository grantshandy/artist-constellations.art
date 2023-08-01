<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';

	export let data: { nodes: Array<any>; links: Array<{ source: string; target: string }> };
	export let demo: boolean = false;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	$: if (graph) graph.graphData(data);

	let width: number;
	let height: number;

	$: if (graph) graph.width(width);
	$: if (graph) graph.height(height);

	// init the graph when the DOM is added
	onMount(() => {
		if (graph) {
			graph(graphElem).backgroundColor('#00000000').graphData(data);
		}

		if (demo && graph) {
			const dist = 900;
			let angle = 0;

			graph
				.cameraPosition({ z: dist })
				.showNavInfo(false)
				.enableNodeDrag(false)
				.enableNavigationControls(false);

			setInterval(() => {
				graph?.cameraPosition({
					x: dist * Math.sin(angle),
					z: dist * Math.cos(angle)
				});
				angle += Math.PI / 900;
			}, 10);
		}

		graphElem.classList.remove('invisible');
	});

	// just to be sure
	onDestroy(() => {
		graph = null;
	});
</script>

<div class="rounded-md" bind:clientWidth={width} bind:clientHeight={height}>
	<div bind:this={graphElem} />
</div>
