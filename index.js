

let songsData = []
function loadSongs(artist){

   fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "60669e97f7mshf88d946ea97bc61p1f9f34jsnbfbce3cb9a39",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((songs)=>{
      console.log('here',songs)
      for(let songList in songs.data){
        songsData[songList] = {
          name:songs.data[songList].artist.name,
          title:songs.data[songList].artist.title,
          image:songs.data[songList].album.cover_medium,
        }
      }
      
      console.log('small obj',songsData);

      renderSongs()
    })
    .catch((err)=>{
      console.error(err)
    })


   
    
    
    
   
  
    
}



 function renderSongs(){
   
    let songsDiv = document.getElementById('bring-here')
    songsData.forEach(song => songsDiv.innerHTML += 
        `<div class="col pl-0">
                  <div class="card h-100">
                    <div class="position-relative">
                      <img
                        src="${song.image}"
                        class="card-img-top img-fluid rounded py-3 px-2"
                        alt="..."
                      />

                      <div class="play"></div>
                    </div>

                    <div class="card-body px-2 pt-0" id="song-here">
                      <h5 class="card-title mb-1 text-white">
                       ${song.name}
                      </h5>
                      <p class="card-text text-white-50">${song.title}</p>
                    </div>
                  </div>
                </div>`)
                
}


window.onload = () =>{

  loadSongs('drake')
  

}