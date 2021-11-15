let borderR
let borderG
let borderB
let borderWidth
let backgroundR
let backgroundG
let backgroundB

function styleProcessing(){
	borderR = document.getElementById("borderRed").value
	borderG = document.getElementById("borderGreen").value
	borderB = document.getElementById("borderBlue").value
	borderWidth = document.getElementById("borderWidth").value
	backgroundR = document.getElementById("backgroundRed").value
	backgroundG = document.getElementById("backgroundGreen").value
	backgroundB = document.getElementById("backgroundBlue").value
	document.getElementById("sample").style.borderColor = "rgb(" + borderR + "," + borderG + "," + borderB + ")"
	document.getElementById("sample").style.borderWidth = "" + borderWidth + ""
	document.getElementById("sample").style.backgroundColor = "rgb(" + backgroundR + "," + backgroundG + "," + backgroundB + ")"
	document.getElementById("sample").style.borderStyle = "solid"
	console.log(document.getElementById("sample").style.backgroundColor)
	console.log(document.getElementById("sample").style.borderWidth)
	console.log(document.getElementById("sample").style.borderColor)
	console.log(backgroundR, backgroundG, backgroundB)
}
