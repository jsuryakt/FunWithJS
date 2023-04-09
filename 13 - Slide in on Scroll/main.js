const slideImages = document.querySelectorAll(".slide-in");

slideImages();

window.addEventListener("scroll", () => slideImages);

function slideImages() {
  slideImages.forEach((slideImage) => {
    const isHalfShown =
      slideImage.offsetTop + slideImage.offsetHeight / 2 <
      window.scrollY + window.innerHeight;
    const isNotScrolledPast =
      window.scrollY < slideImage.offsetTop + slideImage.offsetHeight;

    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}
