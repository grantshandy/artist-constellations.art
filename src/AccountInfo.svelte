<script lang="ts">
	export let account: any;
</script>

<div class="p-2 text-center">
	<a href={account.external_urls.spotify}>
		<img src={account.images.slice(-1)[0].url} alt="Profile" class="rounded-md mx-auto w-5/6">
		<h2>{account.display_name}</h2>
	</a>
</div>
