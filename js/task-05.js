const input = document.querySelector('#name-input')
// console.dir(input);
const output = document.querySelector('#name-output')
// console.dir(output);

const inputValue = (evt) => {
     output.textContent = input.value.trim() !== "" ? evt.currentTarget.value.trim() : 'Anonymous';
}

input.addEventListener('input', inputValue)