document.addEventListener("DOMContentLoaded", () => {
  // Initialize Tiny Slider
  const slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    controls: false,
    nav: false,
  });

  // Initialize ScrollReveal
  ScrollReveal().reveal(".reveal", {
    duration: 1000,
    distance: "20px",
    easing: "ease-in-out",
    origin: "bottom",
    reset: true,
  });
});
