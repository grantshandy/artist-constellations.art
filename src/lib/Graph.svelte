<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';
	import { NodeStyle, colorByPopularity, currentArtist, darkTheme } from '$lib';
	import * as THREE from 'three';
	import SpriteText from 'three-spritetext';
	import noProfile from '$lib/../assets/question.png';
	import daisyuiColors from 'daisyui/src/theming/themes';
	import type { Artist } from '@spotify/web-api-ts-sdk';

	export let data: { nodes: Array<any>; links: Array<{ source: string; target: string }> };
	export let demo: boolean = false;

	export let nodeStyle: NodeStyle;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	const getTheme = (): any => daisyuiColors[`[data-theme=${localStorage.getItem('theme')}]`];

	const getPopularityColor = (artist: any) =>
		`hsl(${(artist.popularity / 100) * 360},${artist.popularity}%,50%)`;

	const updateNodeStyle = (style: NodeStyle) => {
		if (!graph || !style) return;
		if ($colorByPopularity && style == NodeStyle.Picture) $colorByPopularity = false;

		const color = localStorage.getItem('theme') == darkTheme ? '#ffffff' : '#363636';

		graph.nodeColor(() => color);
		graph.linkColor(() => color);

		if ($colorByPopularity && !demo) {
			switch (style) {
				case NodeStyle.Dot:
					graph.nodeColor(getPopularityColor);
					break;

				case NodeStyle.Text:
					const color = localStorage.getItem('theme') == darkTheme ? '#000000' : '#ffffff';

					graph.nodeThreeObject((node: any) => {
						const sprite = new SpriteText(node.name);
						const backgroundColor = getPopularityColor(node);

						sprite.color = color;
						sprite.borderColor = backgroundColor;
						sprite.backgroundColor = backgroundColor;

						sprite.borderWidth = 4;
						sprite.borderRadius = 4;
						sprite.textHeight = 8;

						return sprite;
					});

					break;
			}

			return;
		}

		switch (style) {
			case NodeStyle.Dot:
				graph.nodeThreeObject((_: any) => {});
				break;

			case NodeStyle.Picture:
				graph.nodeThreeObject((node: any) => {
					const imgTexture = new THREE.TextureLoader().load(
						node.images?.slice(-1)[0]?.url ?? noProfile
					);
					const material = new THREE.SpriteMaterial({ map: imgTexture });
					let sprite = new THREE.Sprite(material);
					sprite.scale.set(25, 25);
					return sprite;
				});
				break;

			case NodeStyle.Text:
				const theme = getTheme();
				const color = localStorage.getItem('theme') == darkTheme ? '#000000' : '#ffffff';

				graph.nodeThreeObject((node: any) => {
					const sprite = new SpriteText(node.name);

					sprite.color = color;
					sprite.borderColor = theme.primary;
					sprite.backgroundColor = theme.primary;

					sprite.borderWidth = 4;
					sprite.borderRadius = 4;
					sprite.textHeight = 8;

					return sprite;
				});
				break;
		}
	};

	const updateGraphSize = () => {
		if (!graph) {
			return;
		}

		if (demo && graphElem.parentElement) {
			graph.width(graphElem.parentElement.clientWidth);
			graph.height(graphElem.parentElement.clientHeight);
		} else {
			graph.width(document.documentElement.clientWidth);
			graph.height(document.documentElement.clientHeight);
		}
	};

	// init the graph when the DOM is added
	onMount(() => {
		if (graph) {
			graph(graphElem)
				.showNavInfo(false)
				.enableNodeDrag(false)
				.linkWidth(2)
				.nodeRelSize(6)
				.nodeLabel('')
				.backgroundColor('#00000000')
				.onNodeHover((node) => {
					if (node) $currentArtist = node;
				})
				.graphData(data);
		}

		if (demo && graph) {
			const dist = 900;
			let angle = 0;

			graph.cameraPosition({ z: dist }).enableNavigationControls(false);

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

	// just to be sure ;)
	onDestroy(() => {
		graph = null;
	});

	window.onresize = updateGraphSize;
	window.addEventListener('themeChange', (_) => updateNodeStyle(nodeStyle), false);

	$: if (graph) graph.graphData(data);
	$: updateNodeStyle(nodeStyle);

	colorByPopularity.subscribe(() => updateNodeStyle(nodeStyle));
</script>

<div bind:this={graphElem} />
