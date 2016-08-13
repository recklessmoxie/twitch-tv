var html = '';



$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });

$.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?callback=?',
  function (data) {
    console.log(data);
  });
