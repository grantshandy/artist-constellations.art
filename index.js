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
  
  var nodes = await getFollowing();
  var links = await getRelationships(nodes);

  var graphElement = document.getElementById("graph");
  var contentElement = document.getElementById("content");

  var myGraph = ForceGraph3D();
  myGraph(graphElement)
      .graphData({ nodes, links })
      .enableNodeDrag(false)
      .showNavInfo(false)
      .nodeColor(node => window.getComputedStyle( document.body ,null).getPropertyValue('color'))
      .width(contentElement.clientWidth)
      .height(contentElement.clientHeight)
      .backgroundColor(window.getComputedStyle( document.body ,null).getPropertyValue('background-color'));
} 

async function getRelationships(nodes) {
  var links = new Array();
  var idArray = new Array();

  nodes.forEach(function(artist) {
    idArray.push(artist.id);
  });

  for await (const artist of nodes) {
    var relatedArtists = await getRelated(artist);
    for (const relatedArtist of relatedArtists) {
      if (idArray.includes(relatedArtist.id)) {
        var potentialConnection = { source: artist.id, target: relatedArtist.id };
        var reversedPotentialConnection = { source: relatedArtist.id, target: artist.id };

        if (!links.includes(potentialConnection) && !links.includes(reversedPotentialConnection)) {
           links.push(potentialConnection);
        }
      }
    }
  }

  return links;
}

async function getRelated(artist) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${artist.id}/related-artists`,
      type: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
      },
      success: (response) => {
        var relatedArtists = new Array ();

        response.artists.forEach(function(artist) {
          relatedArtists.push({ name: artist.name, id: artist.id });
        });

        resolve(relatedArtists);
      },
      error: function(){
        resetToken();
      },
    })
  })
}

// Get who we follow
async function getFollowing() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://api.spotify.com/v1/me/following?type=artist&limit=50',
      type: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
      },
      success: (response) => {
        var artists = new Array ();

        response.artists.items.forEach(function(artist) {
          artists.push({ name: artist.name, id: artist.id });
        });

        resolve(artists);
      },
      error: function(){
        resetToken();
      },
    })
  })
}


// If there's any problem getting data from spotify it probably means our token expired.
// Here we reset the token by removing it from localStorage and reloading the page without the params.
function resetToken() {
  localStorage.removeItem('spotToken');
  window.location.href = window.location.href.split('#')[0];
}