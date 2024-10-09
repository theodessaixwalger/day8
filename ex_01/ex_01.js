document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    arrows: false,
  });
  splide.mount();
});
