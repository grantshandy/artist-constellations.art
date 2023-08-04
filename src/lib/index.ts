// place files you want to import through the `$lib` alias in this folder.

import { writable } from 'svelte/store';

export enum GraphType {
	ShortTerm = 'short_term',
	MediumTerm = 'medium_term',
	LongTerm = 'long_term',
	Following = 'following',
	All = 'all'
}

export enum NodeStyle {
	Dot = 'dot',
	Picture = 'picture',
	Text = 'text'
}

export const graphType: writable<GraphType> = writable(
	(localStorage.getItem('graphType') as GraphType) ?? GraphType.ShortTerm
);
graphType.subscribe((value: GraphType) => localStorage.setItem('graphType', value));

export const nodeStyle: writable<NodeStyle> = writable(
	(localStorage.getItem('nodeStyle') as NodeStyle) ?? NodeStyle.Dot
);
nodeStyle.subscribe((value: NodeStyle) => localStorage.setItem('nodeStyle', value));

export const colorByPopularity: writable<boolean> = writable(
	JSON.parse(localStorage.getItem('colorByPopularity') ?? 'false') ?? false
);
colorByPopularity.subscribe((value: boolean) =>
	localStorage.setItem('colorByPopularity', JSON.stringify(value))
);

export const globalError: writable<string | null> = writable(null);

export const darkTheme = 'night';
export const lightTheme = 'autumn';
