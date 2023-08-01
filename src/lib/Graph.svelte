<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';
	import { NodeStyle } from '$lib/graph_utils';
	import type { Artist } from '@spotify/web-api-ts-sdk';
	import * as THREE from 'three';
	import SpriteText from 'three-spritetext';

	export let data: { nodes: Array<any>; links: Array<{ source: string; target: string }> };
	export let demo: boolean = false;

	export let nodeStyle: NodeStyle;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	$: if (graph) graph.graphData(data);
	$: if (graph)
		switch (nodeStyle) {
			case NodeStyle.Dot:
				console.log('view as dot');
				graph.nodeThreeObject((_: any) => {});
				graph.nodeLabel((node: any) => node.name);
				break;

			case NodeStyle.Picture:
				graph.nodeThreeObject((node: any) => {
					console.log(node);

					let imgTexture = new THREE.TextureLoader().load(node.images.slice(-1)[0].url);
					let material = new THREE.SpriteMaterial({ map: imgTexture });
					let sprite = new THREE.Sprite(material);
					sprite.scale.set(25, 25);
					return sprite;
				});
				graph.nodeLabel((node: any) => node.name);
				break;

			case NodeStyle.Text:
				graph.nodeThreeObject((node: any) => {
					const sprite = new SpriteText(node.name);

					// if (this.colorByUser) {
					// if (node.owners.length > 1) {
					// 	sprite.color = '#ffffff';
					// 	sprite.borderColor = '#859900';
					// 	sprite.backgroundColor = '#859900';
					// } else if (node.owners[0] == this.me.display_name) {
					// 	sprite.color = '#ffffff';
					// 	sprite.borderColor = '#b58900';
					// 	sprite.backgroundColor = '#b58900';
					// } else if (node.owners[0] == this.share.data.displayName) {
					// 	sprite.color = '#ffffff';
					// 	sprite.borderColor = '#2aa198';
					// 	sprite.backgroundColor = '#2aa198';
					// }
					// } else {
					sprite.color = '#ffffff';
					sprite.borderColor = '#002b36';
					sprite.backgroundColor = '#002b36';
					// }

					sprite.borderWidth = 4;
					sprite.borderRadius = 4;
					sprite.textHeight = 8;

					return sprite;
				});
				graph.nodeLabel('');
				break;
		}

	const updateGraphSize = () => {
		if (graph && graphElem.parentElement) {
			graph.width(graphElem.parentElement.clientWidth);
			graph.height(graphElem.parentElement.clientHeight);
		}
	};

	// init the graph when the DOM is added
	onMount(() => {
		if (graph) {
			// const style = getComputedStyle(document.body);

			graph(graphElem)
				.linkColor(() => '#303030')
				// .nodeColor(() => '#ffffff')
				.backgroundColor('#00000000')
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

	window.onresize = updateGraphSize;
</script>

<div bind:this={graphElem} />
