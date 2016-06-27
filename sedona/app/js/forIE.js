function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
          rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
      var ua = navigator.userAgent;
      var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
          rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function forIE() {
  if(getInternetExplorerVersion() !== -1) {
    var windowForIE = document.querySelector('.forIE');
    var close = document.querySelector('.forIE .icon-icon-cross');

    windowForIE.style.display = 'block';
    close.addEventListener('click', function() {
      event.preventDefault();
      windowForIE.style.display = 'none';      
    });

  }
}

forIE();