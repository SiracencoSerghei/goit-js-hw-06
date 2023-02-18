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

function createBoxes(amount) {
  amount = inputValue();
  
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  const boxesItems = [];
  let boxSizes = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxesItem = document.createElement("div");
    
    boxesItem.style.width = `${boxSizes}px`;
    boxesItem.style.height = `${boxSizes}px`;
    boxSizes += 10;
    boxesItem.style.backgroundColor = getRandomHexColor();
    boxesItem.style.margin = '10px';
    boxesItems.push(boxesItem);
  }
  divBoxes.append(...boxesItems);
  console.log(divBoxes.children);
}

function destroyBoxes() {
  while (divBoxes.firstChild) {
    // divBoxes.removeChild(divBoxes.firstChild);
    divBoxes.removeChild(divBoxes.children[0]);
    console.log(divBoxes.firstChild);
  }
}

// function destroyBoxes() {
//   divBoxes.innerHTML = "";
// }