async function loadSongs(artist){

    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "652a249567msha16735a3902749dp1b0cdajsnf44568c1e811",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    let songsResponse = await response.json()
    return songsResponse.data
    
}
