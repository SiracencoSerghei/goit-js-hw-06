let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});