const lightArea = document.querySelector(".light-area");

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  lightArea.style.backgroundPosition = `${clientX}px ${clientY}px`;
});
