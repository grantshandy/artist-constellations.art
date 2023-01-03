import { writable } from "svelte/store";
import { SpotifyWebApi } from "spotify-web-api-js";

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

export function updateGraphType(graphType: GraphType, api: SpotifyWebApi) {
  api.getMe().then((me) => console.log(me));
}

export function updateNodeStyle(nodeStyle: NodeStyle) {
}
