let authToken;

function authSpotify() {

  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "2c059958c8a548a69d95f751753097b6";
  const redirectUri = "http://127.0.0.1:5500/callback.html";
  const scopes = ["playlist-modify-public","playlist-modify-private","user-read-private"];

  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`
};
