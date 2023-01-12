<script lang="ts">
	import { graphData, NodeStyle, nodeStyle } from "./graph";
	import ForceGraph from "force-graph";
	import * as d3 from "d3-force";
	import { onMount } from "svelte";

	let graph = null;

	const elemID = "graph2d";
	const ro = new ResizeObserver((entries) => {
		if (graph) {
			const div = entries[0].contentRect;

			graph.width(div.width);
			graph.height(div.height);
		}
	});

	onMount(() => {
		const elem = document.getElementById(elemID);

		graph = ForceGraph()(elem)
			.d3Force("radial", d3.forceRadial(50))
			.width(elem.clientWidth)
			.height(elem.clientHeight)
			.nodeColor(() => "#94a3b8")
			.linkColor(() => "#64748b");
		ro.observe(elem);

		elem.firstElementChild.classList.add("rounded-md");
		elem.firstElementChild.firstElementChild.classList.add("rounded-md");

		updateNodeStyle($nodeStyle);
	});

	nodeStyle.subscribe((nodeStyle: NodeStyle) => updateNodeStyle(nodeStyle));

	$: if (graph) {
		graph.graphData({ nodes: $graphData.nodes, links: $graphData.edges });
	}

	function updateNodeStyle(nodeStyle: NodeStyle) {
		if (graph) {
			if (nodeStyle == NodeStyle.Dot) {
				graph.nodeLabel((node) => node.name);
			} else if ($nodeStyle == NodeStyle.Picture) {
				const size = 12;

				graph
					.nodeCanvasObject((node, ctx) => {
						if (node.img) {
							ctx.drawImage(
								node.img,
								node.x - size / 2,
								node.y - size / 2,
								size,
								size
							);
						}
					})
					.nodePointerAreaPaint((node, color, ctx) => {
						ctx.fillStyle = color;
						ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size); // draw square as pointer trap
					})
					.nodeLabel((node) => node.name);
			} else if (nodeStyle == NodeStyle.Text) {
				graph
					.nodeCanvasObject((node, ctx, globalScale) => {
						const label = node.name;
						const fontSize = 7;
						ctx.font = `${fontSize}px Sans-Serif`;
						ctx.textAlign = "center";
						ctx.textBaseline = "middle";
						const bckgDimensions = [ctx.measureText(label).width, fontSize].map(
							(n) => n + fontSize * 0.2
						);
						ctx.fillStyle = "#334155";
						ctx.fillRect(
							node.x - bckgDimensions[0] / 2,
							node.y - bckgDimensions[1] / 2,
							...bckgDimensions
						);

						ctx.fillStyle = "#94a3b8";
						ctx.fillText(label, node.x, node.y);

						node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
					})
					.nodePointerAreaPaint((node, color, ctx) => {
						ctx.fillStyle = color;
						const bckgDimensions = node.__bckgDimensions;
						bckgDimensions &&
							ctx.fillRect(
								node.x - bckgDimensions[0] / 2,
								node.y - bckgDimensions[1] / 2,
								...bckgDimensions
							);
					})
					.nodeLabel((_) => "");
			}
		}
	}
</script>

<main id={elemID} class="w-full h-full rounded-md select-none" />
