let authToken;
let recommendationTracks;
let userid;
let playlistid;
// genre dicitionary lists are in artists, genres, tracks form
let genreDict = {
  clearday: [
    "7CajNmpbOovFoOoasH2HaY%2C4kYSro6naA4h99UJvo89HB",
    "pop%2Cedm",
    "4cluDES4hQEUhmXj6TXkSo",
  ],
  clearnight: [
    "7CajNmpbOovFoOoasH2HaY%2C4kYSro6naA4h99UJvo89HB",
    "pop%2Cedm",
    "4cluDES4hQEUhmXj6TXkSo",
  ],
  pcloudyday: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  pcloudynight: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  mcloudyday: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  mcloudynight: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  cloudyday: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  cloudynight: [
    "6eUKZXaKkcviH0Ku9w2n3V%2C5y2Xq6xcjJb2jVM54GHK3t",
    "indie%2Cr-n-b",
    "2QjOHCTQ1Jl3zawyYOpxh6",
  ],
  humidday: [
    "5INjqkS1o8h1imAzPqGZBb%2C3AA28KZvwAUcZuOKwyblJQ",
    "alternative%2Cpsych-rock",
    "6LgJvl0Xdtc73RJ1mmpotq",
  ],
  humidnight: [
    "5INjqkS1o8h1imAzPqGZBb%2C3AA28KZvwAUcZuOKwyblJQ",
    "alternative%2Cpsych-rock",
    "6LgJvl0Xdtc73RJ1mmpotq",
  ],
  lightrainday: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  lightrainnight: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  oshowerday: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  oshowernight: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  ishowerday: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  ishowernight: [
    "2h93pZq0e7k5yf4dywlkpM%2C3Rq3YOF9YG9YfCWD4D56RZ",
    "jazz%2Cstudy",
    "6ad7bQ48TlqAgebCExUJVe",
  ],
  lightsnowday: [
    "23Yv6j1axUmPPo5M6u6erO%2C3l0CmX0FuQjFxr8SK7Vqag",
    "piano%2Cindie-pop",
    "15Ulu5nGXTW4DQ79pT0YhC",
  ],
  lightsnownight: [
    "23Yv6j1axUmPPo5M6u6erO%2C3l0CmX0FuQjFxr8SK7Vqag",
    "piano%2Cindie-pop",
    "15Ulu5nGXTW4DQ79pT0YhC",
  ],
  rainday: [
    "1Uff91EOsvd99rtAupatMP",
    "classical%2Crainy-day",
    "2tJulUYLDKOg9XrtVkMgcJ%2C7wvwXi9Z66dcH5t202vVkN",
  ],
  rainnight: [
    "1Uff91EOsvd99rtAupatMP",
    "classical%2Crainy-day",
    "2tJulUYLDKOg9XrtVkMgcJ%2C7wvwXi9Z66dcH5t202vVkN",
  ],
  snowday: [
    "1GxkXlMwML1oSg5eLPiAz3",
    "chill%2Cindie-pop%2Cfolk",
    "4y6jjdklWYLDCIBsj3RMQZ",
  ],
  snownight: [
    "1GxkXlMwML1oSg5eLPiAz3",
    "chill%2Cindie-pop%2Cfolk",
    "4y6jjdklWYLDCIBsj3RMQZ",
  ],
  rainsnowday: [
    "6XyY86QOPPrYVGvF9ch6wz%2C06HL4z0CvFAxyc27GXpf02",
    "alternative%2Chip-hop",
    "7B3z0ySL9Rr0XvZEAjWZzM",
  ],
  rainsnownight: [
    "6XyY86QOPPrYVGvF9ch6wz%2C06HL4z0CvFAxyc27GXpf02",
    "alternative%2Chip-hop",
    "7B3z0ySL9Rr0XvZEAjWZzM",
  ],
  tsday: [
    "2ye2Wgw4gimLv2eAKyk1NB%2C5eAWCfyUhZtHHtBdNk56l1",
    "metal%2Crock",
    "08mG3Y1vljYA6bvDt4Wqkj",
  ],
  tsnight: [
    "2ye2Wgw4gimLv2eAKyk1NB%2C5eAWCfyUhZtHHtBdNk56l1",
    "metal%2Crock",
    "08mG3Y1vljYA6bvDt4Wqkj",
  ],
  tsrainday: [
    "2ye2Wgw4gimLv2eAKyk1NB%2C5eAWCfyUhZtHHtBdNk56l1",
    "metal%2Crock",
    "08mG3Y1vljYA6bvDt4Wqkj",
  ],
  tsnightnight: [
    "2ye2Wgw4gimLv2eAKyk1NB%2C5eAWCfyUhZtHHtBdNk56l1",
    "metal%2Crock",
    "08mG3Y1vljYA6bvDt4Wqkj",
  ],
};

console.log(weather);
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
fetch("https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken,
  },
}).then((response) => {
  console.log(
    response.json().then((data) => {
      console.log(data);
    })
  );
});

function printx(y, button1) {
  console.log(y);
}

function normalizeWeatherAttribute(min, max, input) {
  if (input < min) {
    return 0;
  } else if (input > min) {
    return 1;
  } else {
    return (input - min) / (max - min);
  }
}

function generatePlayList(weatherData) {
  let valence = (
    1 - normalizeWeatherAttribute(1, 9, weatherData.cloudcover)
  ).toString();
  let danceability = normalizeWeatherAttribute(
    -10,
    30,
    weatherData.temp2m
  ).toString();
  let energy = (
    1 - normalizeWeatherAttribute(0, 8, weatherData.prec_amount)
  ).toString();
  let acousticness = normalizeWeatherAttribute(
    0,
    8,
    weatherData.prec_amount
  ).toString();
  let weatherSeed = genreDict[weatherData.weather];

  fetch(
    "https://api.spotify.com/v1/recommendations?seed_artists=" +
      weatherSeed[0] +
      "&seed_genres=" +
      weatherSeed[1] +
      "&seed_tracks=" +
      weatherSeed[2] +
      "&target_valence=" +
      valence +
      "&target_danceability=" +
      danceability +
      "&target_energy=" +
      energy +
      "&target_acousticness=" +
      acousticness,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
    }
  ).then((response) => {
    console.log(
      response.json().then((data) => {
        let arr = [];
        let i;
        for (i = 0; i < 20; i++) {
            arr.push(data.tracks[i].uri)
        }
        console.log(arr)
        recommendationTracks = JSON.stringify({
            "uris" : arr
        })
        console.log(data);
      })
    );
  });
  // Get userid
  fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  }).then((response) => {
    console.log(
      response.json().then((data) => {
        userid = data.id;
        console.log(data);
      })
    );
  });
  // Create playlist
  setTimeout(() => {
    fetch("https://api.spotify.com/v1/users/" + userid + "/playlists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: JSON.stringify({
        'name': "Weathervibe Playlist",
        'description': "A playlist created by Weathervibe",
        'public': true
      })
    }).then((response) => {
      console.log(
        response.json().then((data) => {
          playlistid = data.id;
          console.log(data);
        })
      );
    });
  }, 2000);
  // Adding to playlist
  setTimeout(() => {
      fetch("https://api.spotify.com/v1/playlists/" + playlistid + "/tracks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
    body: recommendationTracks
  }).then((response) => {
    console.log(
      response.json().then((data) => {
        playlistid = data.id;
        console.log(data);
      })
    );
  });
}, 4000)}
