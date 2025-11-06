// console.clear();
console.log("Code Is Now Runing");
const headerEL = document.querySelector("#header");
if (headerEL) {
  function headerScroll() {
    if (window.pageYOffset > 175) {
      header.classList.add("top-0");
      header.style.backgroundColor = "var(--clr-blue)";
    } else {
      header.classList.remove("top-0");
      header.style.backgroundColor = "";
    }
  }
  window.onscroll = function () {
    headerScroll();
  };
  window.onload = function () {
    headerScroll();
  };
}

// Add event listener to toggle navigation bar and backdrop visibility on hamburger menu click.
const hamburger = document.querySelector(".hamburger");
const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
if (hamburger) {
  hamburger.addEventListener("click", function () {
    document.body.classList.toggle("navBarOpen");
    offcanvasBackdrop.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".hamburger") &&
      document.body.classList.contains("navBarOpen")
    ) {
      document.body.classList.remove("navBarOpen");
      offcanvasBackdrop.classList.remove("show");
    }
  });
}

/* Swiper */
if (document.querySelector(".SelectCarSwiper")) {
  let SelectCarSwiper = new Swiper(".SelectCarSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 10,
    pagination: false,
    navigation: {
      nextEl: ".SelectCarSwiper-next",
      prevEl: ".select-car-swiper-prev",
    },
  });
}

if (document.querySelector(".testimonalSwiper")) {
  let testimonalSwiper = new Swiper(".testimonalSwiper", {
    slidesPerView: "1",
    spaceBetween: 15,
    breakpoints: {
      0: {
        slidesPerView: "1",
        spaceBetween: 15,
      },
      992: {
        slidesPerView: "2",
        spaceBetween: 40,
      },
    },
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: false,
    navigation: {
      nextEl: ".testimonal-next",
      prevEl: ".testimonal-prev",
    },
  });
}

if (document.querySelector(".vehiclesBodyTruck")) {
  let vehiclesBodyTruck = new Swiper(".vehiclesBodyTruck", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

/* Car Details Swiper */
if (document.querySelector(".carDetailsSwiper")) {
  var swiper = new Swiper(".carDetailsSwiper", {
    autoplay: true,
    navigation: {
      nextEl: ".car-swiper-button-next",
      prevEl: ".car-swiper-button-prev",
    },
  });
}

/* Custom Range Slider Start */
const rangeInput = document.querySelectorAll(".range-silder-input input"),
  priceInput = document.querySelectorAll(".range-slider-price-input input"),
  range = document.querySelector(".range-slider .range-slider-progress-bar");
let priceGap = 100;

if (rangeInput) {
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
}
/* Custom Range Slider End */

/* Custom Tabing For Vehicles Body Types Section Start */
const vehiclesBodyType = document.getElementsByName("vehicles-body");
const vehiclesBodyTypesRight = document.querySelectorAll(
  ".vehicles-body-types-right  div",
);

if (vehiclesBodyType) {
  vehiclesBodyType.forEach((input) => {
    input.addEventListener("change", (e) => {
      vehiclesBodyTypesRight.forEach((element) => {
        if (element.id === e.target.dataset.id) {
          element.classList.add("show", "active");
        } else {
          element.classList.remove("show", "active");
        }
      });
    });
  });
}
/* Custom Tabing For Vehicles Body Types Section End */
// filter show js start
let carsFilter = document.querySelector("#availableCarsFilter");
function filterShow() {
  carsFilter.classList.add("active");
}
function filterHide() {
  carsFilter.classList.remove("active");
}
// filter show js end

const videoPlayer = document.getElementById("videoPlayer");
const videoPlayerTag = document.querySelector(".video-demo-wrapper");
const mapWrapperlayer = document.querySelector(".map-wrapper-layer");
const videoDemoWrapper = document.querySelector(".video-demo-wrapper");

if (videoPlayerTag) {
  videoDemoWrapper.addEventListener("click", () => {
    mapWrapperlayer.classList.add("d-none");
    videoPlayerTag.classList.add("after-none");
    var src = videoPlayer.src;
    if (src.indexOf("&autoplay=1") === -1) {
      videoPlayer.src += "&autoplay=1";
    }
  });
}
