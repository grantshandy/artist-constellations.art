<script lang="ts">
	import { currentArtist, graphType } from '$lib';
	import type { Artist, SpotifyApi } from '@spotify/web-api-ts-sdk';
	import { fly } from 'svelte/transition';

	export let sdk: SpotifyApi;

	let topTrackCache: { id: string; top: any[] }[] = [];

	const getTopTracks = async (artist: Artist): Promise<any[]> => {
		// "like a boss"

		if (topTrackCache.filter((item) => item['id'] === artist.id).length > 0) {
			return topTrackCache.filter((item) => item['id'] === artist.id)[0].top;
		} else {
			const top: any[] = await sdk.artists.topTracks(artist.id, 'US').then((top) => top.tracks);
			topTrackCache.push({ id: artist.id, top });

			return top;
		}
	};

	$: if ($graphType) $currentArtist = null;
</script>

{#if $currentArtist}
	<div
		class="z-20 absolute top-4 left-4 w-48 md:w-64 collapse shadow-2xl rounded-xl bg-neutral text-neutral-content"
	>
		<input type="checkbox" />
		<div class="collapse-title p-0">
			<div
				class="rounded-t-xl w-full text-white bg-cover bg-center"
				style={`background-image: url(${$currentArtist.images[0]?.url})`}
			>
				<div class="backdrop-brightness-50 p-4 w-full space-y-2 flex items-center">
					<h2 class="card-title text-left">{$currentArtist.name}</h2>
				</div>
			</div>
		</div>
		<div class="collapse-content">
			<div class="pt-3 text-xs md:text-sm space-y-3">
				<div class="space-y-2">
					{#if $currentArtist.genres.length > 0}
						<div>
							<h3 class="text-sm md:text-lg font-semibold ml-1">Genres</h3>
							<ol class="list-disc ml-3">
								{#each $currentArtist.genres.slice(0, 8) as genre}
									<li>{genre}</li>
								{/each}
							</ol>
						</div>
					{/if}

					{#await getTopTracks($currentArtist) then tracks}
						<div in:fly={{ y: -2 }}>
							<h3 class="text-sm md:text-lg font-semibold ml-1">Top Tracks</h3>
							<ol class="list-decimal ml-3">
								{#each tracks as track}
									<li class="link">
										<a href={track.external_urls.spotify} target="_blank" rel="noreferrer noopener"
											>{track.name} &#9658;</a
										>
									</li>
								{/each}
							</ol>
						</div>
					{/await}
				</div>

				<div class="w-full flow-root">
					<p class="text-left float-left">Popularity: {$currentArtist.popularity}%</p>
					<p class="text-right float-right">
						<a
							href={$currentArtist.external_urls.spotify}
							class="link"
							target="_blank"
							rel="noreferrer noopener"
						>
							Visit
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
