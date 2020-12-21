$(document).ready(function () {
  $(function () {
    $(".collapsed").click(function (e) {
      e.preventDefault();
      $(".show").addClass("click-show");
    });
    $(".collapsed").click(function (e) {
      e.preventDefault();
      $(".show").slideToggle();
    });
  });

  $("#banner-slide").owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: true,
    autoplay: true, //tu chay
    autoplayHoverPause: true,
    autoplayTimeout: 3000, //3s
  });

  $("#product-slide").owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
    autoplay: true, //tu chay
    autoplayTimeout: 2000, //3s
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  });
});


