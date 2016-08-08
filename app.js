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
});

$("#close-1").click(function () {
  $("#all-users").hide();
  $("#status").show();
});

$("#online-users").hide();

$(".show-on-users").click(function () {
  $("#online-users").show();
  $("#status-on").hide();
});

$("#close-2").click(function () {
  $("#online-users").hide();
  $("#status-on").show();
});

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });
