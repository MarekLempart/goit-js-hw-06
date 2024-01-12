const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredients) => {
  const li = document.createElement("li");
  li.textContent = ingredients;
  li.classList.add("item");
  ingredientsList.appendChild(li);
});
