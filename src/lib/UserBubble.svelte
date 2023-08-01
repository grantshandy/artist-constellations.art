<script lang="ts">
	import type { User } from '@spotify/web-api-ts-sdk';
	import { fade } from 'svelte/transition';

	export let profile: Promise<User>;
</script>

{#await profile then profile}
	<div class="flex flex-row-reverse items-center gap-2 group">
		<button
			transition:fade={{ delay: 100, duration: 500 }}
			class="rounded-full drop-shadow-md hover:drop-shadow-xl border-2 hover:border-4 transition-all duration-75 overflow-hidden w-12 h-12 flex items-center justify-center"
		>
			{#if profile?.images?.length > 0}
				<img src={profile.images?.slice(-1)[0].url} alt="profile" />
			{:else}
				<span>{profile.display_name}</span>
			{/if}
		</button>
		<div class="grow hidden group-hover:block flex justify-center items-center align-text-top">
			<a
				href={profile.external_urls.spotify}
				class="my-auto p-2 rounded-xl font-semibold"
			>
				User: <span class="underline">{profile.display_name}</span>
			</a>
		</div>
	</div>
{/await}
