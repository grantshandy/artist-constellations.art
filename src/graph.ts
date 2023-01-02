import { writable } from "svelte/store";
import type { SpotifyApi } from "@statsfm/spotify.js";

export const containerID = "graphContainer";
export const graph = writable(null);
export const loadingInfo = writable(null);

export enum GraphType {
  TopMonth,
  TopYear,
  TopAllTime,
  Following,
  AllAvailable,
}

export enum NodeStyle {
  Dot,
  Picture,
  Text,
}

export function updateGraphType(graphType: GraphType, api: SpotifyApi) {
  api.me.top("artists").then((x) => console.log(x));
}

export function updateNodeStyle(nodeStyle: NodeStyle) {
}
