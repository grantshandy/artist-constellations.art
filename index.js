import * as artists from "./artists.js";

// Some settings for getting into spotify...
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = window.location.href;
const scopes = "user-follow-read";

const width = 1280;
const height = 720;

(async () => {
  // Get our token from the page URL
  var token = window.location.hash.substr(1).split('&')[0].split("=")[1]

  // If the token isn't in the URL then try to get it from localStorage.
  if (token == null) {
    token = localStorage.getItem("spotToken");
  }

  // Check if our page has a token...
  if (token) {
    console.log("we have an auth_key!");
    localStorage.setItem("spotToken", token);
    await appLogic();
  
  } else {
    console.log("no auth_key, forcing login.");

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
  var links = new Array ();
  var nodes = new Array ();
  var ids = new Array ();

  var nodes = getFollowingArtists();
  nodes.forEach(logArtist);
  // nodes.forEach(function(artist) {
  //   console.log(artist);
  //   // var relatedArtists = await artists.getRelatedArtists(artist.id);
  //   // relatedArtists.forEach(function(related) {
  //   //   if (!ids.includes(related.id)) {
  //   //     links.push({ source: artist, target: related })
  //   //     console.log("!");
  //   //   }
  //   // });
  // });

  // drawGraph(links, nodes);
}

function logArtist(value) {
  console.log(value);
}

function drawGraph(links, nodes) {
  var graphDiv = document.createElement("div");
  graphDiv.id = "3d-graph";
  document.getElementById("content").appendChild(graphDiv);

  const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .graphData({ nodes, links })
    .nodeLabel('name')
    .width(width)
    .height(height);

  var logoutButton = document.createElement("input");
  logoutButton.type = "button";
  logoutButton.value = "Logout"
  logoutButton.onclick = function() {
    artists.logout();
  }
  document.body.appendChild(logoutButton);
}

async function getFollowingArtists() {
  var artists = new Array ();

  // Get our artists and print each of them.
  await fetch(`https://api.spotify.com/v1/me/following?type=artist&limit=50`, {
      headers: {
      'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
      }
  }).then(response => response.json())
  }).then(data => {
      data.artists.items.forEach(function(artist) {
          artists.push({ name: artist.name, id: artist.id });
      });
  });

  return artists;
}