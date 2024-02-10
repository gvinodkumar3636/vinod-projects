function functionSwitchOff() {

    document.getElementById("bulbImage").src="Images/bulb-go-off-img.png"
    document.getElementById("catImage").src="Images/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent="Swicthed OFF"
}
function functionSwitchedOn(){
    document.getElementById("bulbImage").src="Images/bulb-go-on-img.png"
    document.getElementById("catImage").src="Images/cat-img.png"
    document.getElementById("switchStatus").textContent="Switched ON"
}