const categories = document.querySelectorAll('.item');
// console.log(categories);
// console.log(categories.length);
console.log(`Number of categories: ${categories.length}`);
console.log('');

categories.forEach(el => {
  const category = el.querySelector('h2');
  console.log(`Category: ${category.textContent}`);
  const listOfCategoryElements = el.querySelectorAll('li');
  console.log(`Elements: ${listOfCategoryElements.length}`);
  console.log('');
});

// DONE