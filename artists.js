export async function getRelatedArtists(artist) {
    var artists = new Array();

    await fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
        }
    }).then(response => {
        checkResponse(response);

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
        checkResponse(response);

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

// If there's a problem with getting to spotify that probably means that our auth_key is expired (usually around 60 minutes as I hear)
// This function checks to see if it didn't go through, and unsets spotToken from localStorage then reloads the page.
// This forces the user to re-login and generate a new auth_key.
function checkResponse(response) {
    if (response.status != 200) {
        localStorage.removeItem("spotToken");
        console.log("error getting to spotify API! reloading...");
        window.location.href = window.location.href.split('/')[0];
    }
}