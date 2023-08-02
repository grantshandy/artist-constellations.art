import { writable } from "svelte/store";

export const globalError: writable<string | null> = writable(null);

export const darkTheme = "coffee";
export const lightTheme = "autumn";

export enum GraphType {
  ShortTerm = "short_term",
  MediumTerm = "medium_term",
  LongTerm = "long_term",
  Following = "following",
  All = "all",
}

export enum NodeStyle {
  Dot = "dot",
  Picture = "picture",
  Text = "text",
}
