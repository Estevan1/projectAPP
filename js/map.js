/* 

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.975003, lng: -117.337384},
    zoom: 15
  });
}
*/



var map;
var service;
var infowindow;

function initMap() {


    var rside = new google.maps.LatLng(33.975003, -117.337384);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), {center: rside, zoom: 15});

  var request = {
    query: 'Boba',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}