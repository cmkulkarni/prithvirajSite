
import exportObject from './ImageSource.js';

async function loadImagesAsync(start,end){
	var start_limit = (start === undefined) ? 0 : start;
	var end_limit = (end === undefined) ? exportObject.allImages.length : end;

	//setTimeout(()=>{
		for(var i = start_limit; i <= end_limit; i++){
		  var image_var = new Image();
		  image_var.onload = function(e){
		  };
		  image_var.src = exportObject.allImages[i];
		  console.log("Image Loaded "+ i);
		}
	//}, 1000);
}

export default loadImagesAsync;