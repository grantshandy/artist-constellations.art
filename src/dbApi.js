import axios from "axios";

const TOKEN = "Z2hwX0tWdWlqRkdaNjMwN2dkTXptbUhVNWp3cGFJS05WcjFhYlRYUA==";

export async function uploadData(nodes, displayName, userId, graphType) {
  let token = atob(TOKEN);
  let content = {
    nodes: simplifyNodes(nodes),
    displayName,
    userId,
    graphType,
    date: new Date().toISOString(),
  };

  let filename = `${userId}-${graphType}.json`;

  let sha = await checkIfFileExists(filename);
  
  console.log(sha);

  await axios({
    method: "PUT",
    url:
      `https://api.github.com/repos/artistconstellations-db/database/contents/${filename}`,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
    },
    data: {
      message: `Adding ${graphType} for ${displayName}`,
      sha,
      content: btoa(JSON.stringify(content)),
    },
  });

  return filename;
}

function simplifyNodes(nodes) {
  let final = [];

  nodes.forEach((node) => {
    final.push({
      name: node.name,
      id: node.id,
      genres: node.genres,
      img: node.img,
      popularity: node.popularity,
    });
  });

  return final;
}

export async function checkIfFileExists(filename) {
  let token = atob(TOKEN);

  return await axios({
    method: "GET",
    url:
      `https://api.github.com/repos/artistconstellations-db/database/contents/${filename}`,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .catch((error) => {
      console.log(`Error fetching file: ${error}`);
      return null;
    })
    .then((response) => {
      console.log(response.data);
    
      return response.data.sha;
    });
}

export async function getData(code) {
  // download from github with simple http fetch
}
