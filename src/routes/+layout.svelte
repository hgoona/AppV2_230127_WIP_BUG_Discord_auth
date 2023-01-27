<script lang="ts">
	import '../app.css';
	// import { page } from '$app/stores';
	import Nav from '$lib/components/nav.svelte';
</script>

<div class="p-8 max-w-4xl mx-auto">
	<header>
		<Nav />
	</header>

	<br />
	<slot />
</div>
