<script lang="ts">
	import type { User } from '@spotify/web-api-ts-sdk';

	export let profile: Promise<User>;
</script>

{#await profile then profile}
	<div class="tooltip tooltip-bottom select-none" data-tip={profile.display_name}>
		<div class="avatar">
			<a
				class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden"
				href={profile.external_urls.spotify}
				target="_blank"
				rel="noreferrer noopener"
			>
				{#if profile?.images?.length > 0}
					<img src={profile.images?.slice(-1)[0].url} alt="profile" />
				{:else}
					<span>{profile.display_name}</span>
				{/if}
			</a>
		</div>
	</div>
{/await}
