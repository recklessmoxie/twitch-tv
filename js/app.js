var channels = ["freecodecamp", "JackeL", "cretetion", "Septimus",
  "brunofin", "comster404", "RobotCaleb", "jondcoleman",
  "thomasballinger", "noobs2ninjas", "beohoff", "monstercat"
];

function parseResponse(channelResponse) {
  if (channelResponse.status === 422) { // 422 - unprocessable Entity.
    return {
      'message': 'Twitch account is Closed',
      'status': 'offline'
    };
  } else if (channelResponse.stream === null) { // channel currently offline.
    return {
      'message': 'Channel is Offline',
      'status': 'offline'
    };
  } else { // else channel is online.
    return {
      'message': channelResponse.stream.channel.status,
      'status': 'online'
    };
  }
}

function queryChannelState(channel) {
  var baseStreamsURL = 'https://api.twitch.tv/kraken/streams/'; // using 'streams' parameter.
  var baseChannelsURL = 'https://api.twitch.tv/kraken/channels/'; // using 'channels' parameter.
  var streamsData;
  var channelsData;
  var allData = {};
  var streamsStatusURL = baseStreamsURL + channel + '?callback=?'; // build url, add the 'callback' parameter for
  var channelsStatusURL = baseChannelsURL + channel + '?callback=?'; // a JSONP style query.

  $.getJSON(streamsStatusURL, {}) // query Twitch servers for info on channel.
    .done(function (data) {
      streamsData = parseResponse(data); // examine server response.
      allData.message = streamsData.message; // package 'message' into AllData object.
      allData.status = streamsData.status; // package 'status' into AllData object.
      console.log(data);
    });
}
queryChannelState();
//       var game,
//         status;
//       if (data.stream === null) {
//         game = "Offline";
//         status = "offline";
//         // displayOffline(data);
//         // displayAll(data);
//       } else if (data.stream === undefined) {
//         game = "Account Closed";
//         status = "no account";
//         // displayNoAcct(data);
//         // displayAll(data);
//       } else {
//         game = data.stream.game;
//         status = "online";
//
//         // displayAll(data);
//       };
//       $.getJSON(apiURL("channels", channel), function (data) {
//         var logo = data.logo,
//           name = data.display_name != null ? data.display_name :
//           channel,
//           description = status === "online" ? ': ' + data.status :
//           "";
//         displayOnline(data);
//       });
//     });
//   });
// };
//
// function displayOnline(data) {
//   html =
//     '<ul class="collection"><li class="collection-item avatar indigo lighten-5"><img src=" ' +
//     logo +
//     '" alt="online" class="online-img circle"><span class="title blue-text text-darken-3">' +
//     name + '</span><p class="blue-text text-darken-1">' +
//     game + '<br>' +
//     description + '</p><a href="' +
//     data.url +
//     '" target="_blank" class="secondary-content"><i class="material-icons cyan-text text-accent-3">ondemand_video</i></a></li></ul>}';
// };
//
