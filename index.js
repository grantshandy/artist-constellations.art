// Some settings for getting into spotify...
const client_id = '2ed0e6e8b06842fb854cb15e1690a7b5';
const redirect_uri = window.location.href;
const scopes = 'user-follow-read';

var cursor = null;

// Get our token from the page URL
var token = window.location.hash.substr(1).split('&')[0].split("=")[1];

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
  
  addLoadingText();
  await following();

  $('#following').on("click", async function() {
    addLoadingText();
    await following();
  });

  $('#search-artist').on("click", async function() {
    removeBorder();
    await searchArtist();
  });
}


async function searchArtist() {
  $('#select').children().remove();
  $('#content').children().remove();
  $('#userInfo').children().remove();

  document.getElementById("select").innerHTML = "<input type='text' id='query' placeholder='Enter artist name'><button id='submit'>Draw Graph</button>";

  $('#submit').on("click", async function() {
    await run();
  });

  $('#query').on("keydown", async function(event) {
    if (event.keyCode == 13){
      await run();
    }
  });

  async function run() {
    $('#graph').remove();

    addLoadingText();

    var query = document.getElementById("query").value; 
    $('#loadingText').text("Getting Artists...");
    var nodes = await searchForArtist(query);
    var related = await getRelated(nodes[0]);
    related.forEach(async function(artist) {
      nodes.push(artist);
    });
  
    $('#loadingText').text("Building Relationships...");
    var links = await getRelationships(nodes);
    $('#loadingText').text("Building Graph...");
    graph(nodes, links);
  }
}

async function following() {
  $('#select').children().remove();

  var myself = await getMe();
  var userText = document.createElement('em');
  userText.innerHTML = `User: ${myself.display_name}`;

  var logoutButton = document.createElement('button');
  logoutButton.innerHTML = "Log Out";
  logoutButton.onclick = function() {
    localStorage.removeItem('spotToken');
    window.location.href = window.location.href.split('#')[0];
  }

  var userInfo = document.getElementById('userInfo');
  userInfo.appendChild(userText);
  userInfo.appendChild(logoutButton);

  // Get our following
  $('#loadingText').text("Getting Following...");
  var nodes = await getFollowing();
  $('#loadingText').text("Building Relationships...");
  var links = await getRelationships(nodes);
  $('#loadingText').text("Building Graph...");
  graph(nodes, links);
}

function graph(nodes, links) {
  addBorder();
  $('#content').children().remove();

  var contentElement = document.getElementById("content");
  var graphElement = document.createElement("div");
  graphElement.id = "graph";
  contentElement.appendChild(graphElement);

  var Graph = ForceGraph3D();
  Graph(graphElement)
      .graphData({ nodes, links })
      .enableNodeDrag(false)
      .showNavInfo(false)
      .enablePointerInteraction(false)
      .nodeColor(node => window.getComputedStyle( document.body ,null).getPropertyValue('color'))
      .nodeThreeObject(node => {
        const sprite = new SpriteText(node.name);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = "#F5EFED";
        sprite.textHeight = 8;
        return sprite;
      })
      .width(contentElement.clientWidth)
      .height(contentElement.clientHeight)
      .backgroundColor("#0F0A0A");


  Graph.d3Force('charge').strength(-100);
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

async function searchForArtist(search) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=artist%3A${search}&type=artist&limit=1`,
      type: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
      },
      success: (response) => {
        resolve([{ name: response.artists.items[0].name, id: response.artists.items[0].id}]);
      },
      error: function(error){
        resetToken(error);
      },
    })
  })
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
      error: function(error){
        resetToken(error);
      },
    })
  })
}

async function getFollowing() {
  var totalFollowing = await get();
  while (cursor != null) {  
    var moreFollowing = await get(cursor);
    moreFollowing.forEach(function(x) {
      totalFollowing.push(x);
    })
  }

  async function get(last) {
    var url;

    if (last == null) {
      url = 'https://api.spotify.com/v1/me/following?type=artist&limit=50';
    } else {
      url = `https://api.spotify.com/v1/me/following?type=artist&after=${last}&limit=50`;
    }
  
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
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
  
          cursor = response.artists.cursors.after;
  
          resolve(artists);
        },
        error: function(error){
          resetToken(error);
        },
      })
    })
  }

  console.log(`You follow ${totalFollowing.length} people!`);

  return totalFollowing;
}

async function getMe() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://api.spotify.com/v1/me',
      type: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
      },
      success: (response) => {
        resolve(response);
      },
      error: function(error){
        resetToken(error);
      },
    })
  })
}

// If there's any problem getting data from spotify it probably means our token expired.
// Here we reset the token by removing it from localStorage and reloading the page without the params.
function resetToken(error) {
  alert(error.message);
  localStorage.removeItem('spotToken');
  window.location.href = window.location.href.split('#')[0];
}

function addLoadingText() {
  removeBorder();
  $('#content').children().remove();

  var loadingText = document.createElement("p");
  loadingText.id = "loadingText";
  document.getElementById("content").appendChild(loadingText);
}

function removeBorder() {
  document.getElementById("content").style.borderColor = "transparent";
  document.getElementById("content").style.backgroundColor = "transparent";
}

function addBorder() {
  document.getElementById("content").style.borderColor = "#0F0A0A";
  document.getElementById("content").style.backgroundColor = "#0F0A0A";
}