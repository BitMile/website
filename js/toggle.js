    (function($) {
      $(function() {
        var $header = $('#top-head');

        // Nav Fixed
        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            $header.addClass('fixed');
          } else {
            $header.removeClass('fixed');
          }
        });

        // Nav Toggle Button
        $('#nav-toggle,#global-nav ul li a').click(function(){
          $header.toggleClass('open');
        });

      });
    })(jQuery);
