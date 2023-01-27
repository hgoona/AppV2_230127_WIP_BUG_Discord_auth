<script lang="ts">
	import { page } from '$app/stores';
</script>


<div class="signedInStatus">
    <p class="nojs-show loaded">
        {#if $page.data.session}
            {#if $page.data.session.user?.image}
                <span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
            {/if}
            <!-- <div class="signedInText"> -->
            <div class="flex items-center h-full">
                <p>Signed in as&nbsp</p> <p class="font-medium ">{$page.data.session.user?.email ?? $page.data.session.user?.name}</p>
            </div>

            <nav class="grid grid-cols-2 items-center h-auto w-full bg-slate-500">
                <div class="flex items-center h-full">
                    <!-- PROFILE PICTURE -->
                    <!-- <img
                    class="rounded-full h-10 w-10"
                    src= {$userValues.pfp}
                    alt="profile"
                    /> -->

                    <!-- LINKS -->
                    <p class="text-xs">NAVBAR:</p>
                    <a class="mx-4 text-xs" href="/">Home</a>
                    <a class="mx-4 text-xs" href="/protected">Protected</a>
                    <a class="mx-4 text-xs" href="/protected/user">User</a>
                    <a class="mx-4 text-xs" href="/protected/admin">Admin</a>
                    <!-- <a class="mx-4 text-xs" href="/add">Add</a> -->
                    <p class="text-xs" />
                </div>
                <div class="flex items-center justify-end">
                    <a
                        href="/auth/signout"
                        class="mx-4 text-xs rounded-2xl p-3 shadow hover:shadow-lg transition-shadow"
                        >Sign out</a
                    >
                </div>
            </nav>
        {:else}
            <span class="notSignedInText">You are not signed in</span>
            <a
                href="/auth/signin"
                class="mx-4 text-xs rounded p-1 shadow hover:shadow-md transition-shadow"
                data-sveltekit-preload-data="off">Sign in</a
            >
        {/if}
    </p>
</div>