var Spotify = require("spotify-web-api-js");
var spotifyApi = new Spotify();
let authToken;

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token
authToken = hash.access_token;
console.log(authToken);


spotifyApi.getArtistAlbums("5K4W6rqBFWDnAN6FQUkS6x", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(weather);