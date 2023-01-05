import { get, type Writable, writable } from "svelte/store";
import { me, spotifyApi } from "./spotifyApi";
import { type Artist, type ArtistManager } from "spotify-api.js";
import pLimit from "p-limit";

export const containerID = "graphContainer";
export const loadingInfo = createLoadingInfo();

export interface LoadingInfo {
  shown: boolean;
  text: string;
  value: number;
  max: number;
}

function createLoadingInfo() {
  const { subscribe, update }: Writable<LoadingInfo> = writable({
    shown: true,
    text: "Starting",
    value: 0,
    max: 100,
  });

  return {
    subscribe,
    setShown: (shown: boolean) =>
      update((i: LoadingInfo) => {
        i.shown = shown;

        return i;
      }),
    setText: (text: string) =>
      update((i: LoadingInfo) => {
        i.text = text;

        return i;
      }),
    setValue: (value: number) =>
      update((i: LoadingInfo) => {
        i.value = value;

        return i;
      }),
    setMax: (max: number) =>
      update((i: LoadingInfo) => {
        i.max = max;

        return i;
      }),
    addOne: () =>
      update((i: LoadingInfo) => {
        i.value += 1;

        return i;
      }),
  };
}

export function init2DGraph(container: HTMLElement) {
  loadingInfo.setText("Initializing Graph");
}

export enum GraphType {
  TopMonth = "short_term",
  TopYear = "medium_term",
  TopAllTime = "long_term",
  Following = "following",
  AllAvailable = "all_available",
}

export async function updateGraphType(graphType: GraphType) {
  let artists: Artist[] = [];

  loadingInfo.setShown(true);
  loadingInfo.setText("Getting Artists");
  loadingInfo.setMax(100);
  loadingInfo.setValue(1);
  
  if (
    graphType == GraphType.TopMonth || graphType == GraphType.TopYear ||
    graphType == GraphType.TopAllTime
  ) {
    artists = artists.concat(
      await get(me).getTopArtists({
        timeRange: graphType.toString(),
        limit: 50,
      }),
    );
  }

  if (
    graphType == GraphType.Following
  ) {
    artists = artists.concat(
      await getFollowing(),
    );
  }

  const edges = await getEdges(artists);

  loadingInfo.setShown(false);

  console.log(artists, edges);
}

interface Edge {
  source: string;
  target: string;
}

async function getEdges(artists: Artist[]): Promise<Edge[]> {
  const api = get(spotifyApi);

  const idArray: string[] = artists.map((artist) => artist.id);
  loadingInfo.setValue(0);
  loadingInfo.setMax(idArray.length);
  loadingInfo.setText("Downloading Related");

  const limit = pLimit(3);

  const relatedArtists: {
    name: string;
    id: string;
    related: { name: string; id: string }[];
  }[] = await Promise.all(
    artists.map((artist) => limit(() => getRelated(artist, api))),
  );

  const edges: Edge[] = [];

  for (const artist of relatedArtists) {
    for (const related of artist.related) {
      if (idArray.includes(related.id)) {
        const potentialEdge: Edge = {
          source: artist.id,
          target: related.id,
        };

        const reversedPotentialEdge: Edge = {
          source: related.id,
          target: artist.id,
        };

        if (
          !edges.includes(potentialEdge) &&
          !edges.includes(reversedPotentialEdge)
        ) {
          edges.push(potentialEdge);
        }
      }
    }
  }

  return edges;
}

async function getRelated(
  artist: Artist,
  api: ArtistManager,
): Promise<
  { name: string; id: string; related: { name: string; id: string }[] }
> {
  const related: Artist[] = await api.artists
    .getRelatedArtists(artist.id).then((related: Artist[]) => {
      loadingInfo.addOne();
    
      return related;
    });

  const simplified: { name: string; id: string }[] = related.map(
    (artist: Artist) => {
      return { name: artist.name, id: artist.id };
    },
  );

  return {
    name: artist.name,
    id: artist.id,
    related: simplified,
  };
}

async function getFollowing(): Promise<Artist[]> {
  let artists: Artist[] = await get(me).getFollowingArtists({ limit: 50 });

  if (artists.length == 50) {
    for (let i = 0; i < 30; i++) {
      const fragment: Artist[] = await get(me).getFollowingArtists({
        limit: 50,
        after: artists[artists.length - 1].id,
      });

      artists = artists.concat(fragment);

      if (fragment.length != 50) {
        break;
      }
    }
  }

  return artists;
}

export enum NodeStyle {
  Dot = "DOT",
  Picture = "PICTURE",
  Text = "TEXT",
}

export function updateNodeStyle(nodeStyle: NodeStyle) {
}
