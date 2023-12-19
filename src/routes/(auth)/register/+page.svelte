<script>
	import { Button } from '$comp/button';
	import { Label } from '$comp/label';
	import { Input } from '$comp/input';
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';

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
	let passwordConfirm;

	/**
	 * @type {any}
	 */
	let errors;

	async function register() {
		try {
			await pb
				.collection('users')
				.create({ username: username, password: password, passwordConfirm: passwordConfirm });

			await pb.collection('users').authWithPassword(username, password);

			goto('/dashboard');
		} catch (error) {
			errors = error;
		}

		username = '';
		password = '';
		passwordConfirm = '';
	}
</script>

<div class="container mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-10">
	<h1 class="text-3xl font-bold">Register</h1>
	<form
		on:submit|preventDefault={register}
		class="flex w-full flex-col gap-4 md:w-2/3"
		method="post"
	>
		<div>
			<Label for="username">Username</Label>
			<Input bind:value={username} id="username" type="text" />
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input bind:value={password} id="password" type="password" />
		</div>
		<div>
			<Label for="passwordConfirm">Confirm Password</Label>
			<Input bind:value={passwordConfirm} id="passwordConfirm" type="password" />
		</div>
		<Button class="min-w-full" type="submit">Register</Button>
		{#if errors}
			<small class="text-center text-destructive">{errors}</small>
		{/if}
	</form>
</div>
