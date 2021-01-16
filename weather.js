var x = document.getElementById("demo");
var lat;
var long;
var url;

function getLocation() {
  if (navigator.geolocation) {
    lat = Math.round(navigator.geolocation.getCurrentPosition(coords.latitude)*100) /100;
    long = Math.round(navigator.geolocation.getCurrentPosition(coords.longitude)*100) /100;
    url = "http://www.7timer.info/bin/api.pl?lon=" + str(long) + "&" + "lat=" + str(lat) + "&product=civil&output=json"
    fetch('url')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
    }).catch(err => console.error(err)); 
    } 
    else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
