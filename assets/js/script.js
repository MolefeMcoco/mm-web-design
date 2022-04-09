


$(document).ready(function () {


  $(window).load(function () {
    $(".loaded").fadeOut(2000);
    $(".preloader").delay(2000).fadeOut("slow");
  });

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  $('.center').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  anime.timeline({ loop: false })
    .add({
      targets: '.ml5 .line',
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 3000
    }).add({
      targets: '.ml5 .line',
      duration: 1200,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
      targets: '.ml5 .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 1200,
      offset: '-=1200'
    }).add({
      targets: '.ml5 .letters-left',
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 1200,
      offset: '-=1200'
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 1200,
      offset: '-=1200'
    }).add({
      targets: '.ml5',
      opacity: 1,
      duration: 3000,
      easing: "easeOutExpo",
      delay: 3000
    });

  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
  });

  ScrollReveal().reveal('p')

  $(window).scroll(function () {
    $('#navigation,#down,#contact_button').localScroll({ duration: 1500 });
  });



})




