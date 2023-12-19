<script>
	import { page } from '$app/stores';
	import { Button } from '$comp/button';
</script>

{#if $page.route.id?.includes('/login')}
	<Button href="/register" variant="link" class="absolute right-4 top-4">Register</Button>
{:else}
	<Button href="/login" variant="link" class="absolute right-4 top-4">Login</Button>
{/if}
<div class="flex">
	<div class="bg-slate-300 md:flex-1"></div>
	<div class="flex-1">
		<slot />
	</div>
</div>
