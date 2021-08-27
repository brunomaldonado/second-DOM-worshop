const imageContainer = document.querySelector('#images');

//function si dice que la imagen ya es visible en la pantalla
const isIntersecting = (entry) => {
  //si esta al 200px lejos de la pantalla, entonces has x y y cosa
  return entry.isIntersecting //true dentro de la pantalla y false y falso si es lo contrario
}

let imagesAdded = 0;
let totalImagesLoaded = 0;

                //argumento de intersectionObserver (entry)
export const loadImage = (entry) => {
  const container = entry.target; // image / DIV?
  const image = container.firstChild; //
  const URL = image.dataset.src;

  //navegador cargue la imagen
  image.src = URL;
  // console.log(container); //ya hiciste algo 
  image.onload = () => {
    totalImagesLoaded++;
    logState();
  };

  //ahora desregistra la imagen (unlisten)
  observer.unobserve(container); // del observador deje de observar un nodo
};

                                          //function() que hacer por cada imagen [me va a pasar de parametro todas las entradas que esta escuchando]
const observer = new IntersectionObserver((entries) => {
  //forEach .- por cada uno de los elementos que ya se encuentra en la pantalla realizamos una accion
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  // IntersectionObserver -> observer(image)
  observer.observe(image) //del observador que observe esta imagen que estoy pasando por aqui
  imagesAdded++;
  logState();
}

export const cleanImageContainer = () => {
  const cleanViewPort = imageContainer.querySelectorAll('div');
  const clearNodeList = [ ...cleanViewPort ];
  clearNodeList.forEach(elements => {elements.remove()});
  // console.log(cleanViewPort)

  imagesAdded = 0;
  totalImagesLoaded = 0;
}

function logState() {
  console.log(`🔵 Total number of images added ${imagesAdded}`);
  console.log(`🔴 Total number of images loaded ${totalImagesLoaded}`);
  console.log(`==========================================================================`)
}