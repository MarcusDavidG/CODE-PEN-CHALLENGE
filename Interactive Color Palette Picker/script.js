const colorPicker = document.getElementById("colorPicker");
const addColorButton = document.getElementById("addColorButton");
const paletteContainer = document.getElementById("paletteContainer");

addColorButton.addEventListener("click", () => {
  const colorValue = colorPicker.value;
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = colorValue;
  paletteContainer.appendChild(colorBox);
});
