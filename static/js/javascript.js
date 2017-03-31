function radioTitle() {

  // this is the URL of the json.xml file located on your server.
  var url = 'http://rphradio.net:8000/json.xsl';

  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    jsonpCallback: 'parseMusic',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      // this is the element we're updating that will hold the track title and listeners
      
      // listeners
      $('#listeners').text(json['/mpd.mp3']['listeners']);
      $('#listeners2').text(json['/mpd2.mp3']['listeners']);
      $('#listeners3').text(json['/mpd3.mp3']['listeners']);
      $('#listeners4').text(json['/mpd4.mp3']['listeners']);
      $('#listeners5').text(json['/mpd5.mp3']['listeners']);
      $('#listeners6').text(json['/mpd6.mp3']['listeners']);
      $('#listeners7').text(json['/mpd7.mp3']['listeners']);
      $('#listeners8').text(json['/mpd8.mp3']['listeners']);

      // Non-stop channels
      $('#track-title').text(json['/mpd.mp3']['title']);
      $('#track-title2').text(json['/mpd2.mp3']['title']);
      $('#track-title3').text(json['/mpd3.mp3']['title']);
      $('#track-title4').text(json['/mpd4.mp3']['title']);
      $('#track-title5').text(json['/mpd5.mp3']['title']);
      $('#track-title6').text(json['/mpd6.mp3']['title']);
      $('#track-title7').text(json['/mpd7.mp3']['title']);
      $('#track-title8').text(json['/mpd8.mp3']['title']);

      //live channel
	 $('#track-title-live').text(json['/live.mp3']['title']);

      //test channel
      $('#track-title-test').text(json['/test.mp3']['title']);

    },
    error: function(e) {
      console.log(e.message);
    }
  });

}



$(document).ready(function() {

  setTimeout(function() {
    radioTitle();
  }, 2000);
  setInterval(function() {
    radioTitle();
  }, 5000); // we're going to update our html elements / player every 5 seconds

});