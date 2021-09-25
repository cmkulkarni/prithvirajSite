
import exportObject from './ImageSource.js';

async function loadImagesAsync(){
  setTimeout(()=>{
    exportObject.allImages.forEach(function(img){
      var image_var = new Image();
      image_var.onload = function(e){
          console.log("Image Loaded");
      };
      image_var.src = img;
    });
  }, 5000);
}

export default loadImagesAsync;