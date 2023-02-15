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

//  вариант с классом ......

// class Counter {
//   #counterValue = 0;

//   #elements = {
//     counter: null,
//     buttonDecrement: null,
//     buttonIncrement: null,
//   };

//   constructor(counterSelector, decrementSelector, incrementSelector) {
//     this.#elements.counter = document.querySelector(counterSelector);
//     this.#elements.buttonDecrement = document.querySelector(decrementSelector);
//     this.#elements.buttonIncrement = document.querySelector(incrementSelector);

//     this.#renderCounterValue();
//     this.#bindEvents();
//   }

//   #renderCounterValue() {
//     this.#elements.counter.textContent = this.#counterValue;
//   }

//   #decrement() {
//     this.#counterValue -= 1;
//     this.#renderCounterValue();
//   }

//   #increment() {
//     this.#counterValue += 1;
//     this.#renderCounterValue();
//   }

//   #bindEvents() {
//     this.#elements.buttonDecrement.addEventListener(
//       "click",
//       this.#decrement.bind(this)
//     );
//     this.#elements.buttonIncrement.addEventListener(
//       "click",
//       this.#increment.bind(this)
//     );
//   }
// }

// const counter1 = new Counter(
//   "#value1",
//   '[data-action="decrement1"]',
//   '[data-action="increment1"]'
// );