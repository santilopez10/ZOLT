function initMap() {
  // The location of Uluru
  var madrid = {lat: 40.418266, lng: -3.694687};
  var random = {lat: 40.418476, lng: -3.694687};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: madrid});
  // The marker, positioned at Uluru

  

  // var marker = new google.maps.Marker({position: madrid, map: map});
  // var marker2 = new google.maps.Marker({position: random,map:map});
}