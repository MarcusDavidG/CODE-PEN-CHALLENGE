document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const revealSection = () => {
    const scrollY = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
      if (section.offsetTop < scrollY) {
        section.classList.add("reveal");
      } else {
        section.classList.remove("reveal");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();
});
