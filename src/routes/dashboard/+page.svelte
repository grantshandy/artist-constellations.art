<script lang="ts">
	import { SpotifyApi } from '@spotify/web-api-ts-sdk';
	import ArtistGraph from '$lib/ArtistGraph.svelte';
	import UserBubble from '$lib/UserBubble.svelte';

	import { GraphType } from '$lib/graph_utils';

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
	let graphType: GraphType = GraphType.ShortTerm;
</script>

<div class="w-screen h-screen relative">
	<ArtistGraph {sdk} {data} {loading} {graphType} />
	<div class="absolute top-4 right-4">
		<UserBubble profile={sdk.currentUser.profile()} />
	</div>
	<div class="absolute bottom-0 left-0">
		<button on:click={() => console.log("you did a thing!")}>Some text</button>
	</div>
</div>