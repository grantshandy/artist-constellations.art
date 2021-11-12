export function getRelatedArtists(id) {
    var artists = new Array();

    fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("spotToken")}`,
        }
    }).then(response => {
        checkResponse(response);

        return response.json();
    }).then(data => {
        data.artists.forEach(function(artist) {
            artists.push({ name: artist.name, id: artist.id });
        });
    })

    return artists;
}

export function logout() {
    localStorage.removeItem("spotToken");
    window.location.href = window.location.href.split('/')[0];
    console.log("logging out!");
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