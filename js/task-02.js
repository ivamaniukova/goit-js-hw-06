const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li");
ingredientsItem.textContent = `${ingredient}`;
ingredientsItem.classList.add("item");
list.append(ingredientsItem);});
