$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//       animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//       items: 1,
//       autoHeight: true,
//       loop: true,
//       autoplay: true,
//       autoplayTimeout: 6000,
//       dots: true,
//       lazyLoad: false
//   });
// });

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
  $("#dragon-items").owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:4,
      autoHeight:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots:true,
      lazyLoad:false,
      slideBy:1,
  });
});

