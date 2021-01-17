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
    url = "https://seven-timer-https-proxy.herokuapp.com?lon=" + long.toString() + "&lat=" + lat.toString() + "&product=civil&output=json"
    
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log(out.dataseries[2]);
        weather = out.dataseries[2];
    })
    .catch(err => console.error(err)); 
    
}
