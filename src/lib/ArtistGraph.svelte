<script lang="ts">
	import type { Artist, SpotifyApi } from '@spotify/web-api-ts-sdk';
	import Graph from './Graph.svelte';
	import { fade } from 'svelte/transition';
	import type { GraphType } from './graphutils';

	export let sdk: SpotifyApi;

	export let data: { nodes: any[]; links: { source: string; target: string }[] };
	export let loading: { text: string; percentage: number } | null;
	export let graphType: GraphType;

	/// automatically generates `links` for a set of Artist[] `nodes`.
	const buildLinks = async (artists: Artist[]): Promise<{ source: string; target: string }[]> => {
		const ids = artists.map((artist) => artist.id);

		// we should already be at 20% by the buildLinks phase.
		const loadingBarDelta = 80 / ids.length;

		let links: { source: string; target: string }[] = [];

		// loop through all displayed artists
		for (const artist of artists) {
			const related = await sdk.artists.relatedArtists(artist.id);

			if (loading) {
				loading.percentage += loadingBarDelta;
			}

			// loop through all second-level related artists
			for (const relatedArtist of related.artists) {
				// only add connection if the two artists are both in the graph and not already added (check both sides)
				if (
					ids.includes(relatedArtist.id) &&
					!links.includes({ source: relatedArtist.id, target: artist.id }) &&
					!links.includes({ source: artist.id, target: relatedArtist.id })
				) {
					links.push({ source: artist.id, target: relatedArtist.id });
				}
			}
		}

		return links;
	};

	/// recursively fetches all your followed artists
	const getFollowing = async (after?: string): Promise<Artist[]> => {
		const curr = (await sdk.currentUser.followedArtists(after, 50)).artists;

		if (curr?.cursors?.after) {
			return curr.items.concat(await getFollowing(curr?.cursors?.after));
		} else {
			return curr.items;
		}
	};

	/// get all the `nodes` for a given graphType.
	const getArtists = async (graphType: string = 'short'): Promise<Artist[]> => {
		switch (graphType) {
			case 'short_term':
			case 'medium_term':
			case 'long_term':
				return (await sdk.currentUser.topItems('artists', graphType, 50)).items;
			case 'following':
				return await getFollowing();
			case 'all':
				// recursion, so I'm basically a functional programmer.
				return (await getArtists('short_term'))
					.concat(await getArtists('medium_term'))
					.concat(await getArtists('long_term'))
					.concat(await getArtists('following'));
			default:
				return getArtists('medium_term');
		}
	};

	const populateGraph = async (graphType: string) => {
		loading = { text: 'Downloading Artists', percentage: 10 };
		const nodes = await getArtists(graphType);

		loading = { text: 'Building Links', percentage: 20 };
		const links = await buildLinks(nodes);

		loading = null;
		data = { nodes, links };
	};

	$: populateGraph(graphType);
</script>

<div class="relative">
	{#if loading}
		<div
			class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
			transition:fade={{ delay: 100, duration: 500 }}
		>
			<div class="text-center space-y-3">
				<p class="text-lg font-bold">{loading.text}</p>
				<div class="rounded-full overflow-hidden w-72 h-6">
					<div class="h-full" style={'width: ' + loading.percentage + '%;'} />
				</div>
			</div>
		</div>
	{/if}
	<Graph {data} />
</div>
