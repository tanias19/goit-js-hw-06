function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  /////////////////////////////////////////////////////////
  
  const controls = document.querySelector('#controls')
  // console.dir(controls);
  const numberInput = document.querySelector('[type="number"]')
  // console.dir(number);
  const create = document.querySelector('[data-create]')
  // console.dir(create);
  const destroy = document.querySelector('[data-destroy]')
  // console.dir(destroy);
  const divForBoxes = document.querySelector('#boxes')
  // console.dir(divForBoxes);
  
  /////////////////////////////////////////////////////////
  
  let valueInInput = 0;
  const currentValue = evt => {
    valueInInput = evt.currentTarget.value;
    // console.log(valueInInput);
  }
  
  numberInput.addEventListener('input', currentValue);
  
  /////////////////////////////////////////////////////////
  
  const boxesCreate = amount => {
    let currentSize = 30;
    const boxesArray = [];
    for (let i = 0; i < amount; i += 1) {
      const divBox = document.createElement('div')
      divBox.style.height = `${currentSize}px`;
      divBox.style.width = `${currentSize}px`;
      divBox.style.backgroundColor = getRandomHexColor();
      currentSize += 10;
      boxesArray.push(divBox);
    }
    return divForBoxes.append(...boxesArray)
  }
  
  const createBoxes = () => boxesCreate(Number(numberInput.value))
  
  create.addEventListener('click', createBoxes)
  
  /////////////////////////////////////////////////////////
  
  const destroyBoxes = () => {
    divForBoxes.innerHTML = '';
    numberInput.value = null;
  }
  
  destroy.addEventListener('click', destroyBoxes) 
   
  /////////////////////////////////////////////////////////