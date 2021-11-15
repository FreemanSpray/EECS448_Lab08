let image = 1

function updateImage(){
	if(image == 1){
		document.getElementById("slide").src = "image1.jpeg"
	}
	else if(image == 2){
		document.getElementById("slide").src = "image2.jpeg"
	}
	else if(image == 3){
		document.getElementById("slide").src = "image3.jpeg"
	}
	else if(image == 4){
		document.getElementById("slide").src = "image4.jpeg"
	}
	else {
		document.getElementById("slide").src = "image5.jpeg"
	}
}
function previousImage(){
	if(image == 1){
		image = 5
	}
	else {
		image--
	}
	updateImage()
}

function nextImage(){
	image = (image % 5) + 1
	updateImage()
}
