$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

$(document).ready(function () {
  $(".same-carousel-items").owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      autoHeight: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: true,
      lazyLoad: false
  });
});

// $(document).ready(function () {
//   $(".owl-carousel1").owlCarousel({
//       animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//       items: 3,
//       autoHeight: true,
//       loop: true,
//       autoplay: true,
//       autoplayTimeout: 6000,
//       dots: true,
//       lazyLoad: false,
//       stagePadding: 50
//   });
// });

$(document).ready(function(){
  $("#last-contents-items").owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive : {
        // breakpoint from 0 up
        0 : {
          items:2,
            
        },      
        // breakpoint from 768 up
        768 : {
          items:4,
            
        }
      },
      autoHeight:false,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      dots:false,
      lazyLoad:false,
      slideBy:1,
  });
});

$(document).ready(function(){
  $('#brand-items').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive : {
        // breakpoint from 0 up
        0 : {
          items:3,
            
        },
        // breakpoint from 480 up
        480 : {
          items:4,
            
        },
        // breakpoint from 768 up
        768 : {
          items:6,
            
        }
      },
      autoHeight:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots:true,
      lazyLoad:false,
      slideBy:1,
  });
});

$(document).ready(function(){
  $("#key-items").owlCarousel({
      margin:10,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:8,
      autoHeight:true,
      autoWidth:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      dots:false,
      lazyLoad:false,
      slideBy:1,
  });
});