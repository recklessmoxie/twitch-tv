var clientId = 'o1kvlcroy4pq738ph1q94joc8qcypz5';
var streamers = ["freecodecamp", "JackeL", "cretetion", "Septimus",
  "brunofin", "comster404", "RobotCaleb", "jondcoleman",
  "thomasballinger", "noobs2ninjas", "beohoff", "monstercat"
];
var allStreamers = $("#allStreamers");
var onlineStreamers = $("#onlineStreamers");
var offlineStreamers = $("#offlineStreamers");
var invalidStreamers = $("#invalidStreamers");

$(document).ready(function () {
  $.each(streamers, function (i) {
    var channelName = streamers[i];
    checkStream(channelName);
  });
});

function checkStream(channel) {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channel + "?client_id=" +
      clientId + "&callback=?",
    dataType: 'jsonp',
    headers: {
      'Client-ID': clientId
    },
    success: function (data) {
      if (data.stream) {
        var name = data.stream.channel.display_name;
        var logo = data.stream.channel.logo;
        var stream = data.stream.game;
        var url = data.stream.channel.url;
        var status = data.stream.channel.status;
        displayStream(name, logo, stream, url, status);
      } else if (data.error) {
        invalidStreamers.append(
            "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='assets/caution.png' alt='no account' class='no-acct-img circle'><span class='title blue-text text-darken-4'>" +
            channel +
            "</span><p class='blue-text'>Invalid or Unavailable Account</p><a href='#' title='Invalid Account' class='secondary-content'><i class='material-icons orange-text text-accent4'>error_outline</i></a></li></ul>"
          ),
          allStreamers.append(
            "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='assets/caution.png' alt='no account' class='no-acct-img circle'><span class='title blue-text text-darken-4'>" +
            channel +
            "</span><p class='blue-text'>Invalid or Unavailable Account</p><a href='#' title='Invalid Account' class='secondary-content'><i class='material-icons orange-text text-accent4'>error_outline</i></a></li></ul>"
          );
      } else {
        getProfile(channel);
      }
    }
  });
}

function getProfile(profile) {
  var channel = "https://twitch.tv/" + profile + "/profile";
  $.ajax({
    url: 'https://api.twitch.tv/kraken/channels/' + profile + "?client_id=" +
      clientId + "&callback=?",
    dataType: 'jsonp',
    headers: {
      'Client-ID': clientId
    },
    success: function (data) {
      var name = data.display_name;
      if (data.status !== null) {
        var status = data.status;
      } else {
        var status = "";
      }
      if (data.logo !== null) {
        var logo = data.logo;
      } else {
        var logo =
          "assets/profle.png";
        console.log(data);
      }
      displayOffline(channel, name, status, logo);
    }
  });
}

function displayOffline(channel, name, status, logo) {
  offlineStreamers.append(
      "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='" +
      logo +
      "' alt='offline' class='offline-img circle'><span class='title blue-text text-darken-4'>" +
      name + "</span><p class='blue-text'> Current Status: Offline <br>" +
      status +
      "</p><a href='#!' title='Offline' class='secondary-content'><i class='material-icons pink-text text-accent-3'>access_time</i></a></li></ul>"
    ),
    allStreamers.append(
      "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='" +
      logo +
      "' alt='offline' class='offline-img circle'><span class='title blue-text text-darken-4'>" +
      name + "</span><p class='blue-text'> Current Status: Offline <br>" +
      status +
      "</p><a href='#!' title='Offline' class='secondary-content'><i class='material-icons pink-text text-accent-3'>access_time</i></a></li></ul>"
    );
}

function displayStream(name, logo, stream, url, status) {
  onlineStreamers.append(
      "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='" +
      logo +
      "' alt='online' class='online-img circle'><span class='title blue-text text-darken-4'>" +
      name +
      "</span><p class='blue-text'> Current Status: Online <br>" +
      status +
      "</p><a href='" +
      url +
      "' target='_blank' title='Go to Live Twitch Stream' class='secondary-content'><i class='material-icons cyan-text text-accent-3'>ondemand_video</i></a></li></ul>"
    ),
    allStreamers.append(
      "<ul class='collection'><li class='collection-item avatar indigo lighten-5'><img src='" +
      logo +
      "' alt='online' class='online-img circle'><span class='title blue-text text-darken-4'>" +
      name +
      "</span><p class='blue-text'> Current Status: Online <br>" +
      status +
      "</p><a href='" +
      url +
      "' target='_blank' title='Go to Live Twitch Stream' class='secondary-content'><i class='material-icons cyan-text text-accent-3'>ondemand_video</i></a></li></ul>"
    );
}
