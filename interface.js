$(document).ready(function() {

  var beatroute = new Beatroute();

  var queryArray = ['the+clash+london+calling']

  function track(queryArray) {
    var artistAndTrackString = queryArray[0]
    var url = "https://api.spotify.com/v1/search?query=" + artistAndTrackString + '&type=track&offset=0&limit=1';

    $.get(url, function(data) {
      id = data.tracks.items[0].id;
    })
  }



  function goToUrl(id) {
    window.location.replace('spotify:track:' + id);
  };

  $('#displayTitle').click(function(){
    goToUrl();
  });

})
