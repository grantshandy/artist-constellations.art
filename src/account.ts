export function login() {
  window.location.href =
    `https://accounts.spotify.com/authorize?client_id=2ed0e6e8b06842fb854cb15e1690a7b5&response_type=token&redirect_uri=${window.location.origin}&scope=user-follow-read user-top-read&show_dialog=true`;
}

export function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("lastLoggedIn");
  window.location.href = window.location.origin;
}

export function setShareCode() {
  alert("TODO: set share code");
}

export function checkAccessToken(location: Location): string | null {
  return new URLSearchParams(location.hash.substring(1)).get("access_token");
}
