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
    var preview = data.stream.channel.game;
    var playerId = data.stream.channel._id;

    html +=
      '<script src= "http://player.twitch.tv/js/embed/v1.js"></script><div id="{PLAYER_DIV_ID}"></div><script type="text/javascript">var options = {width: 854, height: 480,channel: "' +
      playerId +
      '"}; var player = new Twitch.Player("{PLAYER_DIV_ID}", options); player.setVolume(0.5);</script>';
    $('#all-users').append(html);
    console.log(preview);
    console.log(data);
  });

$.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?callback=?',
  function (data) {
    var userLogo = data.logo;
    var streamingContent = data.status;
    var userName = data.display_name;
    var contentUrl = data.url;

    html += '<img class="img-fluid card-img-top"' + 'src="' + userLogo +
      '" alt=""><div class="card-block"><h4 class="card-title text-xs-center">' +
      userName +
      '</h4><p class="card-text">' + streamingContent + '</p><a href="' +
      contentUrl + '" class="btn btn-primary">View Channel</a></div>';

    $('#all-users').append(html);
    console.log(data);
  });
