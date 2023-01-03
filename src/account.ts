import SpotifyWebApi from "spotify-web-api-js";
import { writable } from "svelte/store";

export const spotify = writable(null);

export function initSpotifyApi() {
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

  const api = new SpotifyWebApi();
  api.setAccessToken(localStorage.getItem("access_token"));

  return api.getMe().then((me) => { 
    if (me.display_name) {
      spotify.set(api);
    }
  });
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
