const TOKEN = "Z2hwX0Y2MGZ5NnFCbHBNaFFJSjZtRHNMZ3JCdTJORk9SZTRTRGJwcQ==";

import { Octokit } from "@octokit/rest";

export async function uploadData(nodes, displayName, graphType) {
  const octokit = new Octokit({
    auth: atob(TOKEN),
  });

  const random = (length = 8) => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  };

  let code = random(6);
  let content = {
    nodes: simplifyNodes(nodes),
    displayName,
    graphType,
    date: new Date().toISOString(),
  };

  octokit.rest.repos.createOrUpdateFileContents({
    owner: 'artistconstellations-db',
    repo: 'database',
    path: `${code}.json`,
    message: `Updating ${graphType} for ${displayName}`,
    content: btoa(JSON.stringify(content)),
  });

  return code;
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

export async function getData(code) {
  // download from github with simple http fetch
}
