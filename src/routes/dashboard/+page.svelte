<script lang="ts">
	import { SpotifyApi } from '@spotify/web-api-ts-sdk';
	import ArtistGraph from '$lib/ArtistGraph.svelte';
	import UserBubble from '$lib/UserBubble.svelte';

	import { globalError, GraphType, NodeStyle } from '$lib/utils';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
	import { fade } from 'svelte/transition';

	const sdk = SpotifyApi.withUserAuthorization(
		'2ed0e6e8b06842fb854cb15e1690a7b5',
		window.location.origin + '/dashboard',
		['user-follow-read', 'user-top-read']
	);

	let data: { nodes: { id: string }[]; links: { source: string; target: string }[] } = {
		nodes: [],
		links: []
	};
	let loading: { text: string; percentage: number } | null = null;

	let graphType: GraphType =
		(localStorage.getItem('graphType') as GraphType) ?? GraphType.ShortTerm;
	$: localStorage.setItem('graphType', graphType);

	let nodeStyle: NodeStyle = (localStorage.getItem('nodeStyle') as NodeStyle) ?? NodeStyle.Dot;
	$: localStorage.setItem('nodeStyle', nodeStyle);
</script>

<div class="drawer w-screen h-screen">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content relative">
		<!-- graph (covers whole background) -->
		<ArtistGraph {sdk} {data} {loading} {graphType} {nodeStyle} />

		<!-- buttons n stuff -->
		<div class="z-20 absolute top-0 right-0 pt-4 pr-4 flex flex-col items-end space-y-3">
			{#await sdk.currentUser.profile() then profile}
				<UserBubble {profile} />
			{/await}
			<ThemeSwitcher />
		</div>

		<div class="z-20 absolute bottom-0 right-0 pr-4 pb-4 flex flex-col items-end space-y-3">
			{#if $globalError}
				<div transition:fade={{ duration: 200 }} class="alert alert-error flow-root space-x-3">
					<span class="float-left"><span class="font-bold">Error:</span> {$globalError}</span>
					<button on:click={() => ($globalError = null)} class="float-right">
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
			{/if}

			<label class="btn btn-circle btn-primary swap swap-rotate" for="my-drawer">
				<input type="checkbox" class="drawer-toggle" />
				<svg
					class="swap-off fill-current h-8 w-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>
				<svg
					class="swap-on fill-current h-8 w-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>
		</div>
	</div>

	<!-- drawer contents -->
	<div class="drawer-side z-50">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-64 md:w-80 space-y-2 h-full bg-base-200 text-base-content flex flex-col">
			<h1 class="text-xl">Preferences</h1>
			<select class="select select-bordered w-full" bind:value={graphType}>
				<option value={GraphType.ShortTerm}>Top of The Past Month</option>
				<option value={GraphType.MediumTerm}>Top of The Past Year</option>
				<option value={GraphType.LongTerm}>Top of All Time</option>
				<option value={GraphType.Following}>Following</option>
				<option value={GraphType.All}>All Available</option>
			</select>
			<select class="select select-bordered w-full" bind:value={nodeStyle}>
				<option value={NodeStyle.Dot}>View as Dots</option>
				<option value={NodeStyle.Picture}>View as Pictures</option>
				<option value={NodeStyle.Text}>View as Names</option>
			</select>
			<div class="flex-grow"/>
			<button class="btn btn-primary">Log Out</button>
		</ul>
	</div>
</div>
