<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph';
	import { NodeStyle, darkTheme } from '$lib';
	import * as THREE from 'three';
	import SpriteText from 'three-spritetext';
	import noProfile from '$lib/../assets/question.png';
	import daisyuiColors from 'daisyui/src/theming/themes';

	export let data: { nodes: Array<any>; links: Array<{ source: string; target: string }> };
	export let demo: boolean = false;

	export let nodeStyle: NodeStyle;

	let graphElem: HTMLElement;
	let graph: ForceGraph3DInstance | null = ForceGraph3D();

	const getTheme = (): any => {
		return daisyuiColors[`[data-theme=${localStorage.getItem('theme')}]`];
	};

	const updateNodeStyle = (style: NodeStyle) => {
		if (!graph || !style) return;

		const color = localStorage.getItem('theme') == darkTheme ? '#ffffff' : '#000000';

		graph.nodeColor(() => color);
		graph.linkColor(() => color);

		if (style == NodeStyle.Dot) {
			graph.nodeThreeObject((_: any) => {});
			graph.nodeLabel((node: any) => node.name);
		}

		if (style == NodeStyle.Picture) {
			graph.nodeThreeObject((node: any) => {
				const imgTexture = new THREE.TextureLoader().load(
					node.images?.slice(-1)[0]?.url ?? noProfile
				);
				const material = new THREE.SpriteMaterial({ map: imgTexture });
				let sprite = new THREE.Sprite(material);
				sprite.scale.set(25, 25);
				return sprite;
			});
			graph.nodeLabel((node: any) => node.name);
		}

		if (style == NodeStyle.Text) {
			const theme = getTheme();

			graph.nodeThreeObject((node: any) => {
				const sprite = new SpriteText(node.name);

				sprite.color = localStorage.getItem('theme') == darkTheme ? '#000000' : '#ffffff';
				sprite.borderColor = theme.primary;
				sprite.backgroundColor = theme.primary;

				sprite.borderWidth = 4;
				sprite.borderRadius = 4;
				sprite.textHeight = 8;

				return sprite;
			});
			graph.nodeLabel('');
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
				.linkWidth(3)
				.backgroundColor('#00000000')
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
</script>

<div bind:this={graphElem} />
