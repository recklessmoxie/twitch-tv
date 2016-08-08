$(function () {
  $('a[title]').tooltip();
});

$(function () {
  $('#myTab a:first').tab('show')
});

$("#all-users").hide();

$(".users").click(function () {
  $("#all-users").show();
  $("#status").hide();
})

$("#close").click(function () {
  $("#all-users").hide();
  $("#status").show();
})

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });
