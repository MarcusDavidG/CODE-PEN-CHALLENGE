const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
let countdown;

startButton.addEventListener('click', () => {
  let timeLeft = 60;
  timerElement.textContent = timeLeft;

  clearInterval(countdown);
  countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerElement.textContent = 'Time\'s up!';
    }
  }, 1000);
});
