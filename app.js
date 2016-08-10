var html = '';

$(function () {
  $('a[title]').tooltip();
});

$("#nothing").hide();

$(function () {
  $('#statusTabs a:first').tab('show')
});

$("#all-users-wrapper").hide();

$(".users").click(function () {
  $("#all-users-wrapper").show();
  $("#status-header").hide();
});

$("#close").click(function () {
  $("#all-users-wrapper").hide();
  $("#status-header").show();
});

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });

$.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?callback=?',
  function (data) {
    var userLogo = data.logo;

    html += '<img class="img-fluid card-img-top"' + 'src="' + userLogo +
      '" alt=""><div class="card-block"><h4 class="card-title text-xs-center">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div>';

    $('#all-users').append(html);
  });
