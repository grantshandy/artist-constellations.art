export async function getRelatedArtists(artist) {
    var artists = new Array();

    await fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        artists = data.artists;
    })

    return artists;
}
  
export async function getFollowingArtists() {
    var total;
    var artists = new Array ();

    // Get number of artists so we know how much to download.
    // This is redundant but spotify's api is kinda dumb here.
    await fetch('https://api.spotify.com/v1/me/following?type=artist', {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        total = data.artists.total;
    })

    // Get our artists and print each of them.
    await fetch(`https://api.spotify.com/v1/me/following?type=artist&limit=${total}`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        artists = data.artists.items
    });

    return artists;
}