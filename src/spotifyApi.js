import pLimit from "p-limit";

export function convertArtist(artist) {
  let name = artist.name;
  let genres = artist.genres;
  let id = artist.id;
  let popularity = artist.popularity;
  let img =
    artist?.images[0]?.url ??
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png";

  return { name, genres, id, img, popularity };
}

export async function getFollowing() {
  // final list of people we follow
  let firstFragment = await getFollowingFragment();

  let cursor = firstFragment.cursor;
  let artists = firstFragment.artists;

  // add to the final list with subsequent calls
  while (cursor != null) {
    let followingFragment = await getFollowingFragment(cursor);
    cursor = followingFragment.cursor;

    followingFragment.artists.forEach(function (x) {
      artists.push(x);
    });
  }

  return artists;
}

export async function getArtistsTopTracks(artist) {
  let response = await fetch(
    `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );

  let json = await response.json();

  if (json.error) {
    if (json.error.status == 401) {
      logout();
    }

    throw json.error;
  }
  return json.tracks;
}

async function getFollowingFragment(last) {
  let url;

  if (last == null) {
    url = "https://api.spotify.com/v1/me/following?type=artist&limit=50";
  } else {
    url = `https://api.spotify.com/v1/me/following?type=artist&after=${last}&limit=50`;
  }
  
  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  let json = await response.json();

  if (json.error) {
    if ((json.error.status = 401)) {
      logout();
    }

    throw json.error;
  }

  let artists = new Array();

  json.artists.items.forEach(function (artist) {
    artists.push(convertArtist(artist));
  });

  let cursor = json.artists.cursors.after;

  return { artists, cursor };
}

export async function getMe() {
  let response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  let json = await response.json();

  if (json.error) {
    if (json.error.status == 401) {
      logout();
    }

    throw json.error;
  }

  return json;
}

export async function getLinks(nodes) {
  let idArray = [];

  nodes.forEach(function (artist) {
    idArray.push(artist.id);
  });

  let limit = pLimit(2);

  // download all relations concurrently
  let relatedArtists = await Promise.all(
    nodes.map((artist) => limit(() => getRelated(artist)))
  ).catch((error) => {
    throw error;
  });

  let links = [];

  for (const artist of relatedArtists) {
    for (const relatedArtist of artist.relatedArtists) {
      if (idArray.includes(relatedArtist.id)) {
        let potentialConnection = {
          source: artist.id,
          target: relatedArtist.id,
        };
        let reversedPotentialConnection = {
          source: relatedArtist.id,
          target: artist.id,
        };

        if (
          !links.includes(potentialConnection) &&
          !links.includes(reversedPotentialConnection)
        ) {
          links.push(potentialConnection);
        }
      }
    }
  }

  return links;
}

export async function getRelated(artist) {
  let response = await fetch(
    `https://api.spotify.com/v1/artists/${artist.id}/related-artists`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );

  let json = await response.json();

  if (json.error) {
    if (json.error.status == 401) {
      logout();
    }

    throw json.error;
  }

  let relatedArtists = [];

  json.artists.forEach(function (artist) {
    relatedArtists.push({ name: artist.name, id: artist.id });
  });

  return {
    name: artist.name,
    id: artist.id,
    relatedArtists,
  };
}

export async function getTopOf(timeRange) {
  let response = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );

  let json = await response.json();

  if (json.error) {
    if (json.error.status == 401) {
      logout();
    }

    throw json.error;
  }

  let artists = [];

  json.items.forEach(function (artist) {
    artists.push(convertArtist(artist));
  });

  return artists;
}

export function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("lastLoggedIn");
  window.location.href = window.location.href.split("?")[0].split("#")[0];
}
