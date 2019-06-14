
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.975003, lng: -117.337384},
    zoom: 8
  });
}