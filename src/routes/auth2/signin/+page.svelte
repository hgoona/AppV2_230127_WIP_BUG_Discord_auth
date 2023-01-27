<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<h1>SIGNIN page</h1>

<p>
	{#if Object.keys($page.data.session || {}).length}
		{#if $page.data.session?.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session?.user?.email || $page.data.session?.user?.name}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button
			class="mx-4 text-xs rounded-md p-3 shadow hover:shadow-lg transition-shadow"
			on:click={() => signIn('github', {redirect: false, callbackUrl: '/protected/user' })}
			>Sign In with GitHub</button
		>
		<!-- todo input email! -->
		<button
			class="mx-4 text-xs rounded-md p-3 shadow hover:shadow-lg transition-shadow"
			on:click={() => signIn('email')}>Sign In with Email</button
		>
	{/if}
</p>
