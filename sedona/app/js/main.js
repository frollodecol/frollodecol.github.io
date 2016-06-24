function initialize() {
  var mapProp = {
  center:new google.maps.LatLng(34.869540, -111.762154),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map__google-map"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);