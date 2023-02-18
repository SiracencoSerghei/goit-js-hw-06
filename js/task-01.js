const ulCategoriesRef = document.querySelectorAll("#categories .item");
const ulCategoriesLenght = ulCategoriesRef.length;
console.log(`Number of categories: ${ulCategoriesLenght}`);

ulCategoriesRef.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);

  const categoryElem = elem.lastElementChild;

  const categoryElemChild = categoryElem.children;
  const categoryElemChildLength = categoryElemChild.length;
  console.log(`Elements: ${categoryElemChildLength}`);
});
