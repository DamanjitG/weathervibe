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
authToken = hash.access_token;

// Test: calling artist information for kanye west
fetch('https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x', {
    method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
    }
})
    .then((response) => {
        console.log(response.json().then(
            (data) => { console.log(data) }
        ));
    });
