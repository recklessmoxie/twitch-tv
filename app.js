$(function () {
  $('a[title]').tooltip();
});

$(function () {
  $('#myTab a:first').tab('show')
});

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });
