const toggleButton = document.getElementById("toggleButton");
let isPaused = false;

toggleButton.addEventListener("click", () => {
  if (isPaused) {
    document.body.style.animationPlayState = "running";
    toggleButton.textContent = "Pause Animation";
  } else {
    document.body.style.animationPlayState = "paused";
    toggleButton.textContent = "Resume Animation";
  }
  isPaused = !isPaused;
});
