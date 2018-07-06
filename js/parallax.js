$(document).ready(function() {

  redrawDotNav();

  $(window).bind('scroll', function(e) {
    parallaxScroll();
    redrawDotNav();
  });


  $('a.first').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, function() {
      parallaxScroll();
    });
    return false;
  });

  $('a.manned-flight').click(function() {
    $('html, body').animate({
      scrollTop: $('#manned-flight').offset().top
    }, 1000, function() {
      parallaxScroll();
    });
    return false;
  });
  $('a.frameless-parachute').click(function() {
    $('html, body').animate({
      scrollTop: $('#frameless-parachute').offset().top
    }, 1000, function() {
      parallaxScroll();
    });
    return false;
  });
  $('a.english-channel').click(function() {
    $('html, body').animate({
      scrollTop: $('#english-channel').offset().top
    }, 1000, function() {
      parallaxScroll();
    });
    return false;
  });
  $('a.about').click(function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 1000, function() {
      parallaxScroll();
    });
    return false;
  });

  $('nav#primary a').hover(
    function() {
      $(this).prev('h1').show();
    },
    function() {
      $(this).prev('h1').hide();
    }
  );

});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $('#parallax-bg1').css('top', (0 - (scrolled * .25)) + 'px');
  $('#parallax-bg2').css('top', (0 - (scrolled * .5)) + 'px');
  $('#parallax-bg3').css('top', (0 - (scrolled * .75)) + 'px');
}

function redrawDotNav() {
  var section1Top = 0;
  var section2Top = $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
  var section3Top = $('#english-channel').offset().top - (($('#about').offset().top - $('#english-channel').offset().top) / 2);
  var section4Top = $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
  $('nav#primary a').removeClass('active');
  if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
    $('nav#primary a.manned-flight').addClass('active');
  } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
    $('nav#primary a.frameless-parachute').addClass('active');
  } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
    $('nav#primary a.english-channel').addClass('active');
  } else if ($(document).scrollTop() >= section4Top) {
    $('nav#primary a.about').addClass('active');
  }

}
