var channels = ["freecodecamp", "JackeL", "cretetion", "Septimus",
  "brunofin", "comster404", "RobotCaleb", "jondcoleman",
  "thomasballinger", "noobs2ninjas", "beohoff", "monstercat"
];

var streamerStatus = function () {

  $.each(channels, function (i, accountName) {

    var url = 'https://api.twitch.tv/kraken/streams/' + accountName;

    $.ajaxSetup({

      type: 'GET',
      url: url,
      headers: {
        'Client-ID': 'o1kvlcroy4pq738ph1q94joc8qcypz5'
      }
    });

    $.ajax({

      success: function (data) {

        console.log(data);

        if (data.status === 404) {
          $("#rezultat").append("<li class='response'>" + data.message +
            " <i class=' glyphicon glyphicon-ban-circle'></i></li>"
          )

        } else if (data.status === 422) {

          $("#rezultat").append(
            "<li class='response'> <img src='http://www.coverbash.com/wp-content/themes/covers/images/blank_profile_pic.jpg'>" +
            data.message + "</li>")

        } else if (data.stream === null) {

          var url1 = 'https://api.twitch.tv/kraken/channels/' +
            accountName

          $.ajax({

            url: url1,

            success: function (data1) {
              $("#online").append(
                '<ul class="collection"><li class="collection-item avatar indigo lighten-5"><a target="_blank" href=" ' +
                data.stream
                .channel.url + '"><img src=" ' +
                data.stream.channel.logo +
                '" alt="online" class="online-img circle"><span class="title blue-text text-darken-3">' +
                data.stream.channel.display_name +
                '</span><p class="blue-text text-darken-1">' +
                data.stream.channel.game + '<br>' +
                '</p><a href="' +
                data.url +
                '" target="_blank" class="secondary-content"><i class="material-icons cyan-text text-accent-3">ondemand_video</i></a></li></ul>'
              )
            }
          });

          //     }'

        } else {
          $("#rezultat").append("<a target='_blank' href='" + data.stream
            .channel.url +
            "'><li class='online response'> <img src='" + data.stream
            .channel.logo + "'>" + data.stream.channel.display_name +
            ": " + data.stream.channel.game +
            " <i style='color:green' class=' glyphicon glyphicon-ok'></i></li></a>"
          )

        }

      },
      error: function (data) {
        console.log("many fail");
      }

    });

  })

}

var active = function () {
  $.each(channels, function (i, accountName) {

    var url = 'https://api.twitch.tv/kraken/streams/' + accountName;

    $.ajax({
      type: 'GET',
      url: url,
      headers: {
        'Client-ID': 'o1kvlcroy4pq738ph1q94joc8qcypz5'
      },
      success: function (data) {

        if (data.stream !== null) {
          $("#rezultat").append("<a target='_blank' href='" + data.stream
            .channel.url +
            "'><li class='online response'> <img src='" + data.stream
            .channel.logo + "'>" + data.stream.channel.display_name +
            ": " + data.stream.channel.game +
            " <i style='color:green' class=' glyphicon glyphicon-ok'></i></li></a>"
          )
        }

      }
    });

  });
}

var offline = function () {
  $.each(channels, function (i, accountName) {

    var url = 'https://api.twitch.tv/kraken/streams/' + accountName;

    $.ajax({
      type: 'GET',
      url: url,
      headers: {
        'Client-ID': 'o1kvlcroy4pq738ph1q94joc8qcypz5'
      },
      success: function (data) {

        if (data.stream == null && data.status !== 404 && data.status !==
          422) {

          var url1 = 'https://api.twitch.tv/kraken/channels/' +
            accountName

          $.ajax({
            type: 'GET',
            url: url1,
            headers: {
              'Client-ID': 'o1kvlcroy4pq738ph1q94joc8qcypz5'
            },
            success: function (data1) {
              $("#rezultat").append(
                "<li class='response'> <img src='" + data1.logo +
                "'>" + data1.name +
                " : <span style='color:gray'>offline</span>" +
                "</li>")
            }
          });


        }


      }

    });

  })
}

streamerStatus();

$("#svi").on("click", function () {
  $("#rezultat").empty();
  streamerStatus();
});

$("#aktivni").on("click", function () {
  $("#rezultat").empty();
  active();
});

$("#nedostupni").on("click", function () {
  $("#rezultat").empty();
  offline();
});
