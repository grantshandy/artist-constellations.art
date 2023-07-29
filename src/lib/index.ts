// place files you want to import through the `$lib` alias in this folder.

import { persisted } from 'svelte-local-storage-store';

export const preferences = persisted('appState', {
	darkTheme: false
});
