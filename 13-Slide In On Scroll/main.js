// Run every time we scroll, but only runs checkSlide once every certain amount of time
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Select all images that we want to slide in:
const sliderImages = document.querySelectorAll('.slide-in');

// Function that runs every time user scrolls
function checkSlide(e) {
  // Loop over every single image & figure out when it needs to be shown
  sliderImages.forEach((sliderImage) => {
    // Find out how far page is being scrolled down
    // window.scrollY = how much you are scrolled down from the top
    // slideInAt = how much you are scrolled down from the bottom (doesn't start from 0. Ascends)
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2; // pixel level at which photo will slide in at (halfway)
    const imageBottom = sliderImage.offsetTop + sliderImage.height; // how far bottom of image is from top of window
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      // For when we have scrolled past/have not got to the image
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
