const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

// const ingredientsItem = document.createElement('li');
// ingredientsItem.textContent = ${element};
// ingredientsItem.classList.add('item');

const ingredientsItem = element => {
  const ingredientsItem = document.createElement('li');
ingredientsItem.textContent = element;
ingredientsItem.classList.add('item');
console.log(ingredientsItem);
return ingredientsItem;
}
const ingredientsItemsEl = ingredients.map(ingredientsItem);
console.log(ingredientsItemsEl);

ingredientsList.append(...ingredientsItemsEl);

// second variant

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientsEls = [];

// ingredients.forEach((element) => {
//   const ingredientsItems = document.createElement("li");
//   ingredientsItems.classList.add("item");

//   ingredientsItems.textContent = element;
//   ingredientsEls.push(ingredientsItems);
// });

// ingredientsList.append(...ingredientsEls);
// // console.log(ingredientsList);