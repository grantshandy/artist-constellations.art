import { writable } from "svelte/store";

export const containerID = "graphContainer";
export const graph = writable(null);
export const loadingInfo = writable(null);

export enum GraphType {
  TopMonth = "TOPMONTH",
  TopYear = "TOPYEAR",
  TopAllTime = "TOPALLTIME",
  Following = "FOLLOWING",
  AllAvailable = "ALLAVAILABLE",
}

export enum NodeStyle {
  Dot = "DOT",
  Picture = "PICTURE",
  Text = "TEXT",
}

export function updateGraphType(graphType: GraphType) {
  loadingInfo.set(null);
}

export function updateNodeStyle(nodeStyle: NodeStyle) {
}
