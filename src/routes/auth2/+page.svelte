<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>AUTH2 page</h1>
{#if $page.data.session}
	<p>You're already signed in!</p>
	<p>Session expiry: {$page.data.session?.expires}</p>
{:else}
	<!-- <h1>Access Denied</h1> -->
	<p>todo auth stuff here.</p>
	<!-- <p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p> -->
{/if}
