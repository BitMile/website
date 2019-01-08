var app = app || {};

var spBreak = 749;

app.init = function() {

  app.tabletViewport();
  app.anchor();
};

app.isMobile = function() {

  return $(window).width() < spBreak;

};

app.tabletViewport = function() {

  var metaViewport = document.getElementById('viewport');
  var tabletWidth = 750;
  var pcWidth = 1200;
  var viewports = {
    default: metaViewport.getAttribute('content'),
    tablet: 'width=1200, user-scalable=0'
  };

  var viewportSet = function() {
    if (screen.width >= tabletWidth && screen.width < pcWidth) {
      metaViewport.setAttribute('content', viewports.tablet);
    } else {
      metaViewport.setAttribute('content', viewports.default);
    }
  };

  viewportSet();

  window.onload = function() {
    viewportSet();
  };

  window.onresize = function() {
    viewportSet();
  };

};

app.anchor = function() {
  $('.anchor').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
};



$(function() {

  app.init();

});
