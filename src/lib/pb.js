import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
	console.log('authStore changed!');
	currentUser.set(pb.authStore.model);
});
