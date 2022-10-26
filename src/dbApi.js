import axios from "axios";
import sha1 from "crypto-js/sha1";
import Base64 from "crypto-js/enc-base64";

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

  let filename = Base64.stringify(sha1(`${userId}${graphType}`)).slice(0, 7)
    .replace("/", "A").toUpperCase();

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
      content: btoa(btoa(JSON.stringify(content))),
    },
  });

  return filename;
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
      if (error.response.status == 404) {
        return null;
      }
    })
    .then((response) => {
      if (response) {
        if (response.status == 404) {
          return null;
        } else {
          return response.data.sha;
        }
      } else {
        return null;
      }
    });
}

export async function getShareData(code) {
  let token = atob(TOKEN);

  let response = await axios({
    response: "GET",
    url:
      `https://api.github.com/repos/artistconstellations-db/database/contents/${code}`,

    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
    },
    responseType: "text",
  });

  let obj = JSON.parse(atob(atob(JSON.parse(response.data).content)));

  return obj;
}

export function simplifyNodes(nodes) {
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

function generateHex(str) {
  return str.split("")
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}
