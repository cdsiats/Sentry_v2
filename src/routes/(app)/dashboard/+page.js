import { pb } from '$lib/pb';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	if (!pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
}
