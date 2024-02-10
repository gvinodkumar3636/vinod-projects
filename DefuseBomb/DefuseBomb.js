let defuserElement=document.getElementById("defuser");
let timerElement=document.getElementById("timer");
let counter=10;
let intervalId=setInterval(function(){
    counter=counter-1;
    timerElement.textContent=counter;
    if(counter===0){
        timerElement.textContent="Boom";
        clearInterval(intervalId);
    }
},1000);

defuserElement.addEventListener("keydown",function(event){
    let userInput=defuserElement.value;
    if(event.key==="Enter" && userInput==="defuse" && counter!==0){
        timerElement.textContent="You did it!!!";
        clearInterval(intervalId);
    }
});