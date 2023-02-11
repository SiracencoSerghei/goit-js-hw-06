const ulCategoriesRef = document.querySelectorAll('.item');
const ulCategoriesLenght = ulCategoriesRef.length;
console.log(`Number of categories: ${ulCategoriesLenght}`);

ulCategoriesRef.forEach((elem) => {
  // console.log(elem.firstElementChild);
  console.log(`Category: ${elem.firstElementChild.textContent}`);

  const categoryElem = elem.lastElementChild;
//   console.log(categoryElem);

const categoryElemChild = categoryElem.children;
const categoryElemChildLength = categoryElemChild.length;
console.log(`Elements: ${categoryElemChildLength}`);

  // const categoryElem = elem.lastElementChild.textContent;
  // console.log(categoryElem);
});
