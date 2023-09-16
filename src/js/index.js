$(function () {

  let header = $("#header"),
    main = $("#main").innerHeight(),
    scrollOffset = $(window).scrollTop();

  // Fixed Header
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {

    if (scrollOffset > main) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }



  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  })



  // Menu nav toggle
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  })



  // Collapse
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data('collapse');
      $(".accordion__header::after").toggleClass("accordion__header::after active");
      $(this).addClass("active");
    $(blockId).slideToggle();
  });

  // Slider
  $('.single-item').slick({
      Infinity: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
  });
});