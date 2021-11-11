import * as artists from "./artists.js";

// Some settings for getting into spotify...
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = window.location.href;
const scopes = "user-follow-read";

(async () => {
  var token = window.location.hash.substr(1).split('&')[0].split("=")[1]

  // Check if our page was passed a token...
  if (token) {
    localStorage.setItem("spotToken", token);
    await appLogic();
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

// Here is the "real" entry point for our program. We should have our token at this point and can interact with the spotify api and write to the HTML DOM.
async function appLogic() {
  var followingArtists = await artists.getFollowingArtists();

  var content = document.getElementById("content");

  var ul = document.createElement('ul');
  content.appendChild(ul);

  followingArtists.forEach(async function(artist) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(artist.name));
    var relatedArtistList = document.createElement('ul')

    var relatedArtists = await artists.getRelatedArtists(artist);
    relatedArtists.forEach(function(relatedArtist) {
      var relatedArtistItem = document.createElement('li');
      relatedArtistItem.appendChild(document.createTextNode(relatedArtist.name));
      relatedArtistList.appendChild(relatedArtistItem);
    });
    
    li.appendChild(relatedArtistList);
    ul.appendChild(li);
  });
}