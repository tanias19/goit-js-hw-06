function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // const widget = document.querySelector('.widget')
  // console.dir(widget);
  const bgColor = document.querySelector('.color')
  // console.dir(bgColor);
  const changeColor = document.querySelector('.change-color')
  // console.dir(changeColor);
  const body = document.querySelector('body')
  // console.dir(body);
  
  const changeBackgroundColor = () => {
    bgColor.textContent = getRandomHexColor()
    body.style.backgroundColor = bgColor.textContent
  // body.style.backgroundColor = bgColor.textContent = getRandomHexColor()
  } 
  
  changeColor.addEventListener('click', changeBackgroundColor)