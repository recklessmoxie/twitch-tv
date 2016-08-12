var html = '';



$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {

    console.log(data);
  });

$.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?callback=?',
  function (data) {
    var userLogo = data.logo;
    var streamingContent = data.status;
    var userName = data.display_name;
    var contentUrl = data.url;

    html += '<img class="img-resoinsive card-img-top"' + 'src="' + userLogo +
      '" alt=""><div class="card-block"><h4 class="card-title text-center">' +
      userName +
      '</h4><p class="card-text">' + streamingContent + '</p><a href="' +
      contentUrl + '" class="btn btn-primary">View Channel</a></div>';

    $('#all-users').append(html);
    console.log(data);
  });
