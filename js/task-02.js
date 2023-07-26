const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// Create array of all created element
const ingredientsArray = [];
//
ingredients.forEach(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');
  ingredientsArray.push(ingredient);
});
// Adding all elements from ingredientsArray into our DOM list
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsArray);