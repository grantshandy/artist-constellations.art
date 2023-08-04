<script lang="ts">
	import { NodeStyle, GraphType, nodeStyle, graphType, colorByPopularity } from '$lib';
	import type { SpotifyApi } from '@spotify/web-api-ts-sdk';
	import { fade, fly } from 'svelte/transition';

	export let sdk: SpotifyApi;
</script>

<div class="drawer-side z-50">
	<label for="my-drawer" class="drawer-overlay" />
	<div class="menu p-4 w-64 md:w-80 h-full bg-base-200 text-base-content space-y-2 flex flex-col bg-secondary-content">
		<h1 class="text-xl">Preferences</h1>
		<select class="select select-bordered w-full" bind:value={$graphType}>
			<option value={GraphType.ShortTerm}>Top of The Past Month</option>
			<option value={GraphType.MediumTerm}>Top of The Past Year</option>
			<option value={GraphType.LongTerm}>Top of All Time</option>
			<option value={GraphType.Following}>Following</option>
			<option value={GraphType.All}>All Available</option>
		</select>
		<select class="select select-bordered w-full" bind:value={$nodeStyle}>
			<option value={NodeStyle.Dot}>View as Dots</option>
			<option value={NodeStyle.Picture}>View as Pictures</option>
			<option value={NodeStyle.Text}>View as Names</option>
		</select>
		{#if $nodeStyle != NodeStyle.Picture}
			<div class="flex flex-col" transition:fade>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Color by Popularity</span>
						<input type="checkbox" bind:checked={$colorByPopularity} class="checkbox" />
					</label>
				</div>
				{#if $colorByPopularity}
					<div
						transition:fly={{ y: -4 }}
						class="inline-grid mx-1 flex-grow grid-cols-2 px-3 py-1 text-xs md:text-base text-white rounded-md shadow-md bg-gradient-to-r from-[#15803d] via-[#7e22ce] to-[#be185d]"
					>
						<p class="text-left">Less Popular</p>
						<p class="text-right">More Popular</p>
					</div>
				{/if}
			</div>
		{/if}
		<div class="flex-grow" />
		<button
			class="btn btn-primary"
			on:click={() => {
				sdk.logOut();
				localStorage.clear();
				window.location.href = '/';
			}}>Log Out</button
		>
		<p class="text-xs text-center">
			<i
				>&copy; 2023 Grant Handy &middot; <a
					href="/LICENSE.txt"
					class="link"
					target="_blank"
					rel="noreferrer noopener">License</a
				>
			</i>
		</p>
	</div>
</div>
