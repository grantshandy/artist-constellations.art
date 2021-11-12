import * as artists from "./artists.js";

// Some settings for getting into spotify...
const client_id = "2ed0e6e8b06842fb854cb15e1690a7b5";
const redirect_uri = window.location.href;
const scopes = "user-follow-read";

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

  var width = window.innerWidth / 2;
  var height = window.innerHeight / 2

  // var links = [
  //   { target: 'them', source: 'me' },
  //   { target: 'you', source: 'me' },
  //   { target: 'them', source: 'you' },
  // ];

  var links = [];

  var nodes = await artists.getFollowingArtists();

  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  
  const simulation = d3.forceSimulation()
    .force('charge', d3.forceManyBody().strength(-30)) 
    .force('center', d3.forceCenter(width / 2, height / 2))
  
  const nodeElements = svg.append('g')
    .selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('r', 10)
    .attr('fill', '#323232')

  const textElements = svg.append('g')
    .selectAll('text')
    .data(nodes)
    .enter().append('text')
    .text(node => node.name)
    .attr('font-size', 15)
    .attr('color', '#323232')
    .attr('dx', 15)
    .attr('dy', 4)

  const linkElements = svg.append('g')
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('stroke-width', 2)
    .attr('stroke', '#323232')

  simulation.nodes(nodes).on('tick', () => {
    nodeElements
      .attr('cx', node => node.x)
      .attr('cy', node => node.y)
    textElements
      .attr('x', node => node.x)
      .attr('y', node => node.y)
    linkElements
      .attr('x1', link => link.source.x)
      .attr('y1', link => link.source.y)
      .attr('x2', link => link.target.x)
      .attr('y2', link => link.target.y)
  })

  simulation.force('link', d3.forceLink()
    .id(link => link.id)
    .strength(link => 0.02))

  simulation.force('link').links(links)

  var dragDrop = d3.drag()
  .on('start', node => {
    node.fx = node.x
    node.fy = node.y
  })
  .on('drag', node => {
    simulation.alphaTarget(0.7).restart()
    node.fx = d3.event.x
    node.fy = d3.event.y
  })
  .on('end', node => {
    if (!d3.event.active) {
      simulation.alphaTarget(0)
    }
    node.fx = null
    node.fy = null
  });

  nodeElements.call(dragDrop)
}