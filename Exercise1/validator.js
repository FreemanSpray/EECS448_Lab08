function validate(){
	field1 = document.getElementById("box1")
	field2 = document.getElementById("box2")
	if(field1.value != field2.value){
		document.getElementById("output").innerHTML = "The passwords you entered do not match."
	}
	else if(field1.value.length < 8){
		document.getElementById("output").innerHTML = "The password must be at least 8 characters in length."
	}
	else {
		document.getElementById("output").innerHTML = "Password validated."
	}
}
