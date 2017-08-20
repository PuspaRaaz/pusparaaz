$( document ).ready(function() {
  "use strict";

  // Sticky nav
  $("#sticky-nav").sticky({topSpacing:0});

  //Skills
  $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
          .empty()
          .append('<i class="fa fa-circle"></i>');
  });

  // NAV
  $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
  );

  $('#example-one').onePageNav({
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)'
  });

  $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': ($target.offset()) ? $target.offset().top : 0
    }, 900, 'swing', function() {
        window.location.hash = target;
    });
  });

  // Smooth Scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //Tooltip
  $('.tooltipped').tooltip({delay: 50});
});
