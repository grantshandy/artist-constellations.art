var cursor = '';

document.getElementById('log').innerHTML += "following";
var nodes = await getFollowing();
document.getElementById('log').innerHTML += "relationships";
var links = await buildRelationships(nodes);
console.log(links, nodes);

document.getElementById('log').innerHTML += "graph";
const Graph = ForceGraphAR({ markerAttrs: { type:'pattern', url:'screenshots/artist-constellations.patt' }})
(document.getElementById('3d-graph'))
  .graphData({ nodes: nodes, links: links })
  .glScale(160)
  .yOffset(1.8)
  .nodeAutoColorBy('group')
  .nodeRelSize(5)
  .linkWidth(1.5)   
  .nodeOpacity(0.9)
  .linkOpacity(0.3)
  .linkColor(() => 'darkgrey');

// Build the relationships between nodes
async function buildRelationships(nodes) {
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

// Get the related artists from an artist
async function getRelated(artist) {
  return new Promise((resolve, reject) => {
      fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
          },
      })
      .then(response => response.json())
      .then(response => {
          if (response.error) {
              if (response.error.status = 401) {
                  window.location.href = '/';
              }

              console.error(response.error);
              reject(response.error);
          }

          var relatedArtists = new Array ();

          response.artists.forEach(function(artist) {
            relatedArtists.push({ name: artist.name, id: artist.id });
          }); 
  
          resolve(relatedArtists)
      })
      .catch(error => reject(error));
  })
}

async function getFollowing() {
  var totalFollowing = await get();
  while (cursor != null) {  
      var moreFollowing = await get(cursor);
      moreFollowing.forEach(function(x) {
          totalFollowing.push(x);
      });
  }

  return totalFollowing;

  async function get(last) {
      var url;

      if (last == null) {
          url = 'https://api.spotify.com/v1/me/following?type=artist&limit=50';
      } else {
          url = `https://api.spotify.com/v1/me/following?type=artist&after=${last}&limit=50`;
      }

      return new Promise((resolve, reject) => {
          fetch(url, {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('spotToken')}`,
              },
          })
          .then(response => response.json())
          .then(response => {
              if (response.error) {
                  if (response.error.status = 401) {
                    window.location.href = '/';
                  }

                  console.error(response.error);
                  reject(response.error);
              }

              var artists = new Array ();

              response.artists.items.forEach(function(artist) {
                  artists.push({ name: artist.name, id: artist.id, img: artist.images[Math.floor(artist.images.length / 2)].url });
              });
                      
              cursor = response.artists.cursors.after;
  
              resolve(artists)
          })
          .catch(error => reject(error));
      })
  }      
}