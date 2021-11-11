// Some settings for getting into spotify...
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = "http://localhost:5500/index.html";
const scopes = "user-follow-read";

// Check if our page was passed a token...
const token = window.location.hash.substr(1).split('&')[0].split("=")[1]
if (token) {
  // If we already have the token delete the authentication button
  document.getElementById("authenticateButton").remove();
  console.log(token);
} else {
  // If we don't have the token, add an authentication button to login to spotify.
  document.getElementById("authenticateButton").onclick = function() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
  };
}