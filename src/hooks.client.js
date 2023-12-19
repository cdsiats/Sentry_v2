import { currentUser, pb } from '$lib/pb';

pb.authStore.onChange(() => {
	console.log('authStore changed!');
	currentUser.set(pb.authStore.model);
});
