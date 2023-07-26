const counter = document.querySelector('#counter')
// console.dir(counter);
const decrementBtn = document.querySelector('[data-action="decrement"]')
// console.dir(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]')
// console.dir(incrementBtn);
const currentValue = document.querySelector('#value')
// console.dir(currentValue);

let counterValue = 0;

const clickDecrementBtn = () => {
    counterValue += -1
    currentValue.textContent = counterValue
    // console.log(currentValue.textContent);
}

const clickIncrementBtn = () => {
    counterValue += 1
    currentValue.textContent = counterValue
    // console.log(currentValue.textContent);
}

decrementBtn.addEventListener('click', clickDecrementBtn)
incrementBtn.addEventListener('click', clickIncrementBtn)

// clickDecrementBtn()
// clickIncrementBtn()