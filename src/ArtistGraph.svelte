<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';

	export let nodes: Array<any>;
	export let links: Array<[ source: string, target: string]> | null;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	onMount(() => {
		if (graph) {
			graph(graphElem)
				.height(graphElem.clientWidth)
				.width(graphElem.clientWidth)
				.backgroundColor('#00000000')
				.graphData({ nodes, links: [] });

			graphElem.classList.remove("invisible");
		}
	});

	onDestroy(() => {
		graph = null;
	});

	// $: if (outerElem && graph) {
	// 	let size = outerElem.getBoundingClientRect();

	// 	graph.width(size.width);
	// 	graph.height(size.height);
	// }
</script>

<div bind:this={graphElem} />
