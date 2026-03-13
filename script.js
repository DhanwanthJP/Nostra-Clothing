// Offer
const offer_close = document.getElementById("offer-close");
const offer_container = document.getElementById("offer-container");
offer_close.onclick = () => {
  offer_container.style.display = "none";
};

// Slider
var sliderleft = document.getElementById("slider-left-icon");
var sliderright = document.getElementById("slider-right-icon");
var sliderimage = document.querySelector(".slider-image-container");
var slidermargin = 0;

sliderright.addEventListener(
  "click",

  function () {
    slidermargin = slidermargin + 100;

    if (slidermargin > 200) {
      slidermargin = 0;
      sliderimage.style.marginLeft = 0;
    } else {
      sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    }
  },
);

sliderleft.addEventListener(
  "click",

  function () {
    if (slidermargin == 0) {
      slidermargin = 200;
      sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    } else {
      slidermargin = slidermargin - 100;
      sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    }
  },
);
