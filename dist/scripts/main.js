'use strict';

$(document).ready(function () {

  // mmenu начало
  $('.main__menu ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  if (Modernizr.mq('(max-width: 767px)')) {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 115
          }, 1000);
          return false;
        }
      }
    });
  } else {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 73
          }, 1000);
          return false;
        }
      }
    });
  }
  // mmenu конец

  // tabs start
  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(".tab-menu li").removeClass("active");
    $(this).closest("li").addClass("active");

    var index = $(this).closest("li").index();

    $(".tab-content .tab-content-item").removeClass("active");
    $(".tab-content .tab-content-item").eq(index).addClass("active");
  });
  // tabs end

  // owl-carousel start
  $('.partners-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      950: {
        items: 2
      },
      1080: {
        items: 2
      },
      1380: {
        items: 3
      },
      1900: {
        items: 4
      }
    }
  });

  $(".owl-next, .owl-prev").text("");
  // owl-carousel end
});