const authenticateButton = document.getElementById("authenticateButton");
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = "http://localhost:5500/index.html";
const scopes = "user-top-read";

const token = window.location.hash.substr(1).split('&')[0].split("=")[1]

if (token) {
  console.log(token)

  window.opener.spotifyCallback(token)
}

authenticateButton.onclick = function() {
  let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`, 'Login with Spotify', 'width=800,height=600')

  window.spotifyCallback = (payload) => {
    popup.close()

    fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      document.getElementById("yourFollowers").innerHTML = "You have " + data.followers.total + " Followers";
    })
  }
}