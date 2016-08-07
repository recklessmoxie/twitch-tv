$(function () {
  $('a[title]').tooltip();
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });
