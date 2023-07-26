const controlSize = document.querySelector('#font-size-control')
// console.dir(controlSize);
const textSize = document.querySelector('#text')
// console.dir(textSize);

const rangeSize = (evt) => {
   textSize.style.fontSize = evt.currentTarget.value + 'px' 
}

controlSize.addEventListener('input', rangeSize)