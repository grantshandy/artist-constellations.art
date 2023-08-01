<script lang="ts">
	import { SpotifyApi } from '@spotify/web-api-ts-sdk';
	import ArtistGraph from '$lib/ArtistGraph.svelte';
	import UserBubble from '$lib/UserBubble.svelte';

	import { GraphType, NodeStyle } from '$lib/graph_utils';

	const sdk = SpotifyApi.withUserAuthorization(
		'2ed0e6e8b06842fb854cb15e1690a7b5',
		window.location.origin + '/dashboard',
		['user-follow-read', 'user-top-read']
	);

	let data: { nodes: any[]; links: { source: string; target: string }[] } = {
		nodes: [],
		links: []
	};
	let loading: { text: string; percentage: number } | null = null;
	let error: string | null = 'A message!';

	let graphType: GraphType =
		(localStorage.getItem('graphType') as GraphType) || GraphType.ShortTerm;
	$: localStorage.setItem('graphType', graphType);

	let nodeStyle: NodeStyle = (localStorage.getItem('nodeStyle') as NodeStyle) || NodeStyle.Dot;
	$: localStorage.setItem('nodeStyle', nodeStyle);
</script>

<div class="w-screen h-screen relative">
	<!-- graph on in the background -->
	<ArtistGraph {sdk} {data} {loading} {graphType} {nodeStyle} />

	<!-- user profile bubble -->
	<div class="absolute top-4 right-4 space-y-6">
		<UserBubble profile={sdk.currentUser.profile()} />
		<!-- UserBubble profile={sdk.currentUser.profile()} /-->
	</div>

	<!-- view settings -->
	<div class="absolute bottom-4 md:top-4 left-4 space-y-3">
		<select
			class="select select-bordered bg-primary w-full max-w-xs"
			bind:value={graphType}
			title="data"
		>
			<option value={GraphType.ShortTerm}>Top of The Past Month</option>
			<option value={GraphType.MediumTerm}>Top of The Past Year</option>
			<option value={GraphType.LongTerm}>Top of All Time</option>
			<option value={GraphType.Following}>Following</option>
			<option value={GraphType.All}>All Available</option>
		</select>
		<select class="select select-bordered bg-primary w-full max-w-xs" bind:value={nodeStyle}>
			<option value={NodeStyle.Dot}>View as Dots</option>
			<option value={NodeStyle.Picture}>View as Pictures</option>
			<option value={NodeStyle.Text}>View as Names</option>
		</select>
	</div>

	<!-- alert message -->
	{#if error}
		<div transition:fade={{ duration: 300 }} class="absolute bottom-0 left-0 items-center p-4">
			<div class="alert alert-error flow-root space-x-3">
				<span class="float-left">Error: {error}</span>
				<button on:click={() => (error = null)} class="float-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	{/if}
</div>
