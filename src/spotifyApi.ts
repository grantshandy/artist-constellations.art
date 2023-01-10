import { writable } from "svelte/store";
import { Client } from "spotify-api.js";

export const me = writable(null);
export const spotifyApi = writable("init");

export async function auth() {
  const paramsToken: string | null = new URLSearchParams(
    window.location.hash.substring(1),
  ).get(
    "access_token",
  );

  if (paramsToken) {
    localStorage.setItem("access_token", paramsToken);
    window.history.pushState(
      "",
      document.title,
      window.location.pathname +
        window.location.search,
    );
  }

  const accessToken = localStorage.getItem("access_token");
  if (accessToken == null) {
    spotifyApi.set(null);
    return;
  }

  const client: Client = await Client.create({
    cacheSettings: true,
    retryOnRateLimit: true,
    userAuthorizedToken: true,
    token: accessToken,
  }).catch((err) => catchSpotifyApiError(err));

  try {
    const user = client.user;

    if (user.id) {
      me.set(user);
    }
  } catch {
    spotifyApi.set(null);
    return;
  }


  spotifyApi.set(client);
}

export function login() {
  window.location.href =
    `https://accounts.spotify.com/authorize?client_id=2ed0e6e8b06842fb854cb15e1690a7b5&response_type=token&redirect_uri=${window.location.origin}&scope=user-follow-read user-top-read&show_dialog=true`;
}

export function logout() {
  localStorage.removeItem("access_token");
  window.location.href = window.location.origin;
}

export function setShareCode() {
  alert("TODO: set share code");
}

export function catchSpotifyApiError(error: Any) {
  if (error.status == 401) {
    logout();  
  }

  console.log(error);
}
