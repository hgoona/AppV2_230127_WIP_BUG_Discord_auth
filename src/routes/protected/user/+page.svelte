<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<h1>USER page</h1>
	<p>You're signed in with User role.</p>
	<p>Session expiry: {$page.data.session?.expires}</p>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
