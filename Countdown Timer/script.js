document.addEventListener("DOMContentLoaded", () => {
  const countdownContainer = document.querySelector(".countdown-container");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const messageEl = document.getElementById("message");

  // Set the target date for the countdown (Year, Month, Day, Hour, Minute, Second)
  const targetDate = new Date("2024-12-31T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      countdownContainer.style.display = "none";
      messageEl.textContent = "Countdown Completed!";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
