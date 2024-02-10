let usrInpElement = document.getElementById("usrInp")
let randomNumber = Math.ceil(Math.random()*100)
let op = document.getElementById("outputResult")
function check() {
    let guessedNumber = parseInt(usrInpElement.value)
    if (randomNumber > guessedNumber) {
        op.textContent = "Too Low!,Try again"
        op.style.backgroundColor = "blue"
    }else if(randomNumber<guessedNumber){
        op.textContent = "Too High!,Try again"
        op.style.backgroundColor = "blue"
    }else if(randomNumber==guessedNumber){
        op.textContent = "Congractualtions!You got it right."
        op.style.backgroundColor = "green"
    }
    else{
        op.textContent = "Please provide Input"
        op.style.backgroundColor = "red"
    }
}