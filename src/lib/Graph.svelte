<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';
	import resolveConfig from 'tailwindcss/resolveConfig';
	import tailwindConfig from '../../tailwind.config.js';

	export let data: { nodes: Array<any>; links: Array<{ source: string; target: string }> };
	export let demo: boolean = false;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	$: if (graph) graph.graphData(data);

	const theme = resolveConfig(tailwindConfig).theme;

	const updateGraphSize = () => {
		if (!graph) {
			return;
		}

		graph.height(graphElem.clientHeight)
		graph.width(graphElem.clientWidth);
	};

	// init the graph when the DOM is added
	onMount(() => {
		if (graph) {
			graph(graphElem)
				.backgroundColor('#00000000')
				// .nodeColor(() => theme.colors.primary['200'])
				// .linkColor(() => theme.colors.primary['900'])
				.graphData(data);
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

		updateGraphSize();

		graphElem.classList.remove('invisible');
	});

	// just to be sure
	onDestroy(() => {
		graph = null;
	});

	// 3d-force-graph is a nice lib, but it requires some hacks.
	window.onresize = updateGraphSize;
</script>

<div class="grow rounded-md" bind:this={graphElem} />
