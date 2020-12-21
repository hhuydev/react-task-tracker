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
    autoplayTimeout: 4500, //3s
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

  $("#render-reviews").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: true,
    autoplay: false, //tu chay
    autoplayTimeout: 2000, //3s
    autoplayHoverPause: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     nav: false,
    //   },
    //   600: {
    //     items: 2,
    //     nav: false,
    //   },
    //   1000: {
    //     items: 4,
    //     nav: false,
    //   },
    // },
  });

  $(".render-products-area.owl-carousel.owl-theme").owlCarousel({
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
    autoplayTimeout: 4000, //3s
    autoplayHoverPause: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     nav: false,
    //   },
    //   600: {
    //     items: 2,
    //     nav: false,
    //   },
    //   1000: {
    //     items: 4,
    //     nav: false,
    //   },
    // },
  });

  $("#render-trending-products").owlCarousel({
    // items: 3,
    margin: 20,
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

  $("#feartures-collection").owlCarousel({

    items: 1,
    margin: 20,
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

  $("#blog-post").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    navText: false,
    dots: false,
    autoplay: false, //tu chay
    autoplayTimeout: false, //3s
    autoplayHoverPause: false,
  });
});

