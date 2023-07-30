<script lang="ts">
	import AccountInfo from '../../AccountInfo.svelte';
	import { userAccount } from '../../data';

	if (!$userAccount) {
		window.location.href = '/';
	}

	console.log($userAccount);
</script>

<div class="grow grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-4 gap-3">
	<div class="system-element row-span-4 md:col-span-4 md:row-span-4">
		<p>dashboard</p>
	</div>
	<div class="system-element md:row-span-3">
		<p>hover info</p>
	</div>
	<div class="system-element">
		<AccountInfo account={$userAccount?.spotifyAccount} />
	</div>
</div>
