import {
  registerImage,
  cleanImageContainer,
  loadImage
} from './lazy.js'

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];


console.log('Happy hacking :)')
const min = 1;
const max = 123;
const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNodes = () => {
  const container = document.createElement('div');
  container.className = 'conimage'; // here add  styles css 
  // container.className = 'p-2 mx-auto'; // here add  styles css 

  const image = document.createElement('img');
  // image.className = 'mx-auto rounded-md bg-gray-300';
  image.className = 'imageback';
  // image.width = 320;
  image.id = 'random-img'
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //All we need

  container.appendChild(image);

  //modal 
  image.addEventListener("click", (event) => {
    if (event.target.nodeName === 'IMG') {

      var modalImage = document.getElementById('random-img');
      // console.log("i am img", modalImage);

      const span = document.createElement('span');
      span.textContent = 'x';
      span.className = 'close';
      const img = document.createElement('img');
      img.className = 'modal-content';
      img.src = `https://randomfox.ca/images/${random()}.jpg`;
      const caption = document.createElement('div');
      caption.id = 'caption';

      modal.append(span, img, caption);
      modal.style.display = 'block';

      modal.onclick = function () {
        modal.style.display = "none";
      }
    }
  });

  return container;
}


const newImage = createImageNodes();
const mountNode = document.getElementById('images');

//buttons add and clear
const buttonAddImage = document.querySelector('#btnNewImage');
const cleanViewPort = document.querySelector('#btnClean')

const addImage = () => {
  const addNewImage = createImageNodes();
  mountNode.append(addNewImage);
  registerImage(addNewImage);
};

//event listenr
buttonAddImage.addEventListener('click', addImage);
cleanViewPort.addEventListener('click', cleanImageContainer);
// mountNode.append(newImage, createImageNodes(), createImageNodes(), createImageNodes(), createImageNodes(), createImageNodes(), createImageNodes(), createImageNodes());