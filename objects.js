var playlist = {Maroon5:"She will be loved"}
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]:songTitle})
}
