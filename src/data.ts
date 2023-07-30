import { writable } from 'svelte/store';
import * as SpotifyAPI from "./spotifyApi";

export interface UserInfo {
	token: string;
	time: string;
	spotifyAccount: any,
}

export const userAccount = await (async () => {
	const keyName = 'userAccount';

	// attempt to get token from url hash (redirect)
	const newInfo: UserInfo = {
		token: new URL(window.location.href.replace(/#/g, '?')).searchParams.get('access_token'),
		time: new Date().toString(),
		spotifyAccount: null,
	};

	if (newInfo.token) {
		// update URL to delete hash for professionalism :)
		window.history.replaceState({}, document.title, window.location.toString().split('#')[0]);
		window.history.go();
	}

	// get token from localStorage if doesn't exist
	let localInfo: UserInfo | null = JSON.parse(localStorage.getItem(keyName));

	if (localInfo) {
		const diffSecs = (new Date() - Date.parse(localInfo.time)) / 1000;	

		if (diffSecs >= 3600) {
			// log out if logged in over an hour ago
			localInfo = null;
			localStorage.remove(keyName);
		}
	}

	let accountInfo: UserInfo | null = null;

	// choose newer info based on the token
	if (newInfo.token) {
		accountInfo = newInfo;
	} else {
		accountInfo = localInfo;
	}

	// download user info
	if (accountInfo.token) {
		accountInfo.spotifyAccount = await SpotifyAPI.getMe(accountInfo.token);
	}

	const { subscribe, set } = writable(accountInfo);
	localStorage.setItem(keyName, JSON.stringify(accountInfo));

	return {
		subscribe,
		token: accountInfo.token,
		logout: () => {
			set(null);
			localStorage.removeItem(keyName);
			window.location.href = '/';
		}
	};
})();
