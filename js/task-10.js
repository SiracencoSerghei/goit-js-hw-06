function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector('#boxes');

inputEl.addEventListener('input', inputValue);

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);

function inputValue (value) {
  return (value = inputEl.value);
}

let boxSize= 30;
let boxesHTML = "";
function createBoxes(amount) {
  amount = inputValue();
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    const boxColor = getRandomHexColor();
    const boxHTML = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor}; margin: 10px;"></div>`;
    boxesHTML += boxHTML;
  }

  divBoxes.innerHTML = boxesHTML;
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  boxesHTML = "";
  boxSize = 30;
}