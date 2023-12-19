<script>
	import { Button } from '$comp/button';
	import { Label } from '$comp/label';
	import { Input } from '$comp/input';
</script>

<div class="container mx-auto flex min-h-screen w-full items-center justify-center">
	<form class="flex w-full flex-col gap-4 md:w-2/3" method="post">
		<div>
			<Label for="username">Username</Label>
			<Input id="username" type="text" />
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input id="password" type="password" />
		</div>
		<Button class="min-w-full" type="submit">Login</Button>
	</form>
</div>
