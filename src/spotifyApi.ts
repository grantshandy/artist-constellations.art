import { writable } from "svelte/store";
import axios from "axios";

export const me = writable(null);
export const httpClient = axios.create({
  responseType: "json",
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export function auth(): string | null {
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
    return null;
  }

  httpClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  return getMe().then((data) => {
    me.set(data);
    accessToken
  }).catch((_) => null);
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

export function getMe() {
  return httpClient.get("/me").then((resp) => resp.data);
}
