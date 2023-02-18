const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem = (element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add("item");
  return ingredientsItem;
};
const ingredientsItemsEl = ingredients.map(ingredientsItem);

ingredientsList.append(...ingredientsItemsEl);


// second variant

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientsItemsEl = [];

// ingredients.forEach((element) => {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.classList.add("item");

//   ingredientsItem.textContent = element;
//   ingredientsItemsEl.push(ingredientsItem);
// });

// ingredientsList.append(...ingredientsItemsEl);

