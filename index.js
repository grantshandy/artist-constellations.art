// Some settings for getting into spotify...
const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href;
const scopes = 'user-follow-read';

// Get our token from the page URL
var token = window.location.hash.substr(1).split('&')[0].split("=")[1]

// If the token isn't in the URL then try to get it from localStorage.
if (token == null) {
  token = localStorage.getItem('spotToken');
}

// If we have a token...
if (!token) {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
} else {
  // Set our token in localstorage and start the app.
  localStorage.setItem('spotToken', token);
  
  getFollowing()
    .then(connectArtists);
}

// Get who we follow
function getFollowing() {
  var artists = new Array ();

  return $.ajax({
    url: 'https://api.spotify.com/v1/me/following?type=artist&limit=50',
    type: 'GET',
    dataType: 'json',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
    },
  })
}

// Get the related artists
function connectArtists(response) {
  if (!response.artists) {
    resetToken();
  }

  console.log(response);
}

// If there's any problem getting data from spotify it probably means our token expired.
// Here we reset the token by removing it from localStorage and reloading the page without the params.
function resetToken() {
  localStorage.removeItem('spotToken');
  window.location.href = window.location.href.split('#')[0];
}