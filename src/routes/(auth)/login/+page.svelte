<script>
	import { Button } from '$comp/button';
	import { Label } from '$comp/label';
	import { Input } from '$comp/input';
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';
	import { Separator } from '$comp/separator';

	/**
	 * @type {string}
	 */
	let username;
	/**
	 * @type {string}
	 */
	let password;
	/**
	 * @type {string}
	 */
	let errors;

	async function login() {
		try {
			await pb.collection('users').authWithPassword(username, password);
			goto('/dashboard');
		} catch (_) {
			errors = 'Invalid credentials';
		}
		username = '';
		password = '';
	}
</script>

<div class="container mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-2">
	<h1 class="text-3xl font-bold">Login</h1>
	<form on:submit|preventDefault={login} class="flex w-full flex-col gap-4 md:w-2/3" method="post">
		<div>
			<Label for="username">Username</Label>
			<Input bind:value={username} id="username" type="text" />
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input bind:value={password} id="password" type="password" />
		</div>
		<Button class="min-w-full" type="submit">Login</Button>
		{#if errors}
			<small class="text-center text-destructive">{errors}</small>
		{/if}
		<small class="text-center">Or</small>
		<Button class="">
			<img src="/google.svg" alt="Google" class="mr-2 h-4 w-4" />
			Register with Google
		</Button>
	</form>
</div>
