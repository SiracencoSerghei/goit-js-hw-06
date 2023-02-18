function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', onClickChangeColorButton);

function onClickChangeColorButton () {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
}