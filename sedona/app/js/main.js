function initialize() {
  var mapProp = {
  center:new google.maps.LatLng(34.869540, -111.762154),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true,
  };
  var map = new google.maps.Map(document.getElementById("map__google-map"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

var minusAdults = document.querySelector('.hotel-form__icon-minus--adults');
var inputAdults = document.querySelector('.hotel-form__input--adults');
var plusAdults = document.querySelector('.hotel-form__icon-plus--adults');

var minusChildren = document.querySelector('.hotel-form__icon-minus--children');
var inputChildren = document.querySelector('.hotel-form__input--children');
var plusChildren = document.querySelector('.hotel-form__icon-plus--children');

minusAdults.addEventListener('click', function(event) {
  event.preventDefault();
  if (inputAdults.value > 0) {
    inputAdults.value-=1;
  };
});

plusAdults.addEventListener('click', function(event) {
  event.preventDefault();
    inputAdults.value = +inputAdults.value + 1;
});

minusChildren.addEventListener('click', function(event) {
  event.preventDefault();
  if (inputChildren.value > 0) {
    inputChildren.value-=1;
  };
});

plusChildren.addEventListener('click', function(event) {
  event.preventDefault();
    inputChildren.value = +inputChildren.value + 1;
});
