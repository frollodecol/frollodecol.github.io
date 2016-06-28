var topMenuCross = document.querySelector('.top-menu__cross');
var topMenuMenuButton = document.querySelector('.top-menu__menu-button');
var topMenuItems = document.querySelectorAll('.top-menu__item');

topMenuCross.addEventListener('click', function(event) {
  event.preventDefault();
  for (var i = 0; i < topMenuItems.length; i++) {
    topMenuItems[i].style.display = 'none';   
  };
});
topMenuMenuButton.addEventListener('click', function(event) {
  event.preventDefault();
  for (var i = 0; i < topMenuItems.length; i++) {
    topMenuItems[i].style.display = 'block';   
  };
});