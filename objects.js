var playlist = {artist:"Maroon 5", song:"She will be loved."}
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artist]:artistName}, {[song]:songTitle})
}