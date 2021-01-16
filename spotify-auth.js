let authToken;

window.authSpotify = function () {
  if (authToken) {
    return;
  }
  // Get the hash of the url
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

  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "2c059958c8a548a69d95f751753097b6";
  const redirectUri = "http://127.0.0.1:5500/callback.html";
  const scopes = ["user-read-email"];

  // If there is no token, redirect to Spotify authorization
  if (!authToken) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;
  }
};
