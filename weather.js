var x = document.getElementById("demo");
var lat,long;
var url;
var weather;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callLocation);
     }
    else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function callLocation(position){
    lat = Math.round(position.coords.latitude * 100) / 100;
    long = Math.round(position.coords.longitude * 100) / 100;
    console.log(lat);
    console.log(long);
    url = "http://www.7timer.info/bin/api.pl?lon=" + long.toString() + "&lat=" + lat.toString() + "&product=civil&output=json"
    
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log(out);
        console.log(out.dataseries[2]);
        weather = out.dataseries[2];
        getSeed(out.dataseries[2]);
    })
    .catch(err => console.error(err)); 
    
}

function getSeed(weatherObject){
    console.log(weatherObject.timepoint);
}
