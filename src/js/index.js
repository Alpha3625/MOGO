// $(function () {

//   let header = $("#header"),
//     main = $("#main").innerHeight(),
//     scrollOffset = $(window).scrollTop();

//   // Fixed Header
//   checkScroll(scrollOffset);

//   $(window).on("scroll", function () {
//     scrollOffset = $(this).scrollTop();

//     checkScroll(scrollOffset);
//   });

//   function checkScroll(scrollOffset) {

//     if (scrollOffset > main) {
//       header.addClass("fixed");
//     } else {
//       header.removeClass("fixed");
//     }
//   }



//   // Smooth scroll
//   $("[data-scroll]").on("click", function (event) {
//     event.preventDefault();

//     let $this = $(this),
//       blockId = $(this).data('scroll'),
//       blockOffset = $(blockId).offset().top;

//     $("#nav a").removeClass("active");
//     $this.addClass("active");

//     $("html, body").animate({
//       scrollTop: blockOffset
//     }, 500);
//   })



//   // Menu nav toggle
//   $("#nav-toggle").on("click", function (event) {
//     event.preventDefault();

//     $(this).toggleClass("active");
//     $("#nav").toggleClass("active");
//   })



//   // Collapse
//   $("[data-collapse]").on("click", function (event) {
//     event.preventDefault();

//     let $this = $(this),
//       blockId = $this.data('collapse');
//       $(".accordion__header::after").toggleClass("accordion__header::after active");
//       $(this).addClass("active");
//     $(blockId).slideToggle();
//   });

//   // Slider
//   $('.single-item').slick({
//       Infinity: true,
//       fade: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  // const header = document.getElementById("header");
  const main = document.getElementById("main").offsetHeight;
  // let scrollOffset = window.pageYOffset;

  // Fixed Header
  window.onscroll = function showHeader() {
    let header = document.getElementById("header");

    if (window.pageYOffset > 50) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }

  // Smooth scroll
  const scrollLinks = document.querySelectorAll("[data-scroll]");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const blockId = this.getAttribute("data-scroll");
      const blockOffset = document.querySelector(blockId).offsetTop;

      document.querySelectorAll("#nav a").forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");

      window.scrollTo({
        top: blockOffset,
        behavior: "smooth",
      });
    });
  });

  // Menu nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", function (event) {
    event.preventDefault();

    this.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Collapse
  const collapseLinks = document.querySelectorAll("[data-collapse]");

  collapseLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const blockId = this.getAttribute("data-collapse");
      const accordionHeaders = document.querySelectorAll(".accordion__header::after");
      accordionHeaders.forEach(function (header) {
        header.classList.toggle("active");
      });
      this.classList.add("active");
      const block = document.querySelector(blockId);
      block.style.display = block.style.display === "none" ? "block" : "none";
    });
  });

  // Slider
  const slider = document.querySelector('.single-item');
  if (slider) {
    new Glide(slider, {
      type: 'slider',
      startAt: 0,
      perView: 1,
      autoplay: 5000,
    }).mount();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      control.classList.toggle('active');
      content.classList.toggle('active');

      if (self.classList.contains('active')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//   // Sticky Header on Scroll
//   window.addEventListener("scroll", function () {
//     let sc = window.pageYOffset;
//     const header = document.getElementById("header");

//     if (sc > 100) {
//       header.classList.add("small");
//     } else {
//       header.classList.remove("small");
//     }
//   });

//   // Smooth scroll
//   const scrollLinks = document.querySelectorAll("[data-scroll]");
//   scrollLinks.forEach(function (scrollLink) {
//     scrollLink.addEventListener("click", function (event) {
//       event.preventDefault();

//       const blockId = this.getAttribute("data-scroll");
//       const blockElement = document.querySelector(blockId);

//       document.querySelectorAll("#nav a").forEach(function (navLink) {
//         navLink.classList.remove("active");
//       });

//       this.classList.add("active");

//       window.scrollTo({
//         top: blockElement.offsetTop,
//         behavior: "smooth",
//       });
//     });
//   });

//   // Menu nav toggle
//   const navToggle = document.getElementById("nav-toggle");
//   navToggle.addEventListener("click", function (event) {
//     event.preventDefault();

//     this.classList.toggle("active");
//     document.getElementById("nav").classList.toggle("active");
//   });

//   // Collapse
//   const collapseLinks = document.querySelectorAll("[data-collapse]");
//   collapseLinks.forEach(function (collapseLink) {
//     collapseLink.addEventListener("click", function (event) {
//       event.preventDefault();
//       this.classList.toggle("active");
//     });
//   });

//   // Slider
//   const sliders = document.querySelectorAll("[data-slider]");
//   sliders.forEach(function (slider) {
//     // Инициализация Slick Slider (если у вас есть библиотека Slick Slider)
//     new Glide(slider, {
//       type: "carousel",
//       startAt: 0,
//       perView: 1,
//       focusAt: "center",
//       gap: 0,
//     }).mount();
//   });
// });