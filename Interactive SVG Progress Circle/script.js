document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("progressSlider");
  const progressValue = document.getElementById("progressValue");
  const foregroundCircle = document.querySelector(".foreground-circle");
  const circumference = 2 * Math.PI * 90;

  slider.addEventListener("input", () => {
    const value = slider.value;
    const offset = circumference - (value / 100) * circumference;
    foregroundCircle.style.strokeDashoffset = offset;
    progressValue.textContent = `${value}%`;
  });
});
