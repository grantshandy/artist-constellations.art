// Some settings for getting into spotify...
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = window.location.href;
const scopes = "user-follow-read";

(async () => {
  const token = window.location.hash.substr(1).split('&')[0].split("=")[1]

  // Check if our page was passed a token...
  if (token) {
    // Take our artists and print them.
    var artists = await getFollowingArtists(token);
    artists.forEach(function(artist) {
      document.getElementById("content").innerHTML += `<p><a href='${artist.external_urls.spotify}'>${artist.name}</a> id=${artist.id}</p>`;
    })

  } else {
    // If not then add an authenticate button.
    var authenticateButton = document.createElement("input");
    authenticateButton.type = "button";
    authenticateButton.value = "Login To Spotify";
    authenticateButton.onclick = function() {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
    };
    document.body.appendChild(authenticateButton);
  }
})();

async function getFollowingArtists(token) {
  var total;
  var artists;

  // Get number of artists so we know how much to download.
  // This is redundant but spotify's api is kinda dumb here.
  await fetch('https://api.spotify.com/v1/me/following?type=artist', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    total = data.artists.total;
  })

  // Get our artists and print each of them.
  await fetch(`https://api.spotify.com/v1/me/following?type=artist&limit=${total}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    artists = data.artists.items
  });

  return artists;
}