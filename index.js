var buttonlength=document.querySelectorAll(".drum").length;
for(var i=0;i<buttonlength;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonNumber=this.innerHTML;
    audioplay(buttonNumber);
    var classOfInstrument="."+this.innerHTML;
    addclass(classOfInstrument);
})
}
document.addEventListener("keydown",function(event){
    var buttonNumber2=event.key;
    audioplay(buttonNumber2);
    var classOfInstrument="."+event.key;
    addclass(classOfInstrument);
})
function audioplay(sound){
    var audio;
    switch(sound){
        case "w":audio = new Audio('sounds/crash.mp3');
        break;
        case "a":audio = new Audio('sounds/kick-bass.mp3');
        break;
        case "s":audio = new Audio('sounds/snare.mp3');
        break;
        case "d":audio = new Audio('sounds/tom-1.mp3');
        break;
        case "j":audio = new Audio('sounds/tom-2.mp3');
        break;
        case "k":audio = new Audio('sounds/tom-3.mp3');
        break;
        case "l":audio = new Audio('sounds/tom-4.mp3');
        break;
        default:alert("error");
        break;
    }
    audio.play();
}
function addclass(classname){
    var activeButton=document.querySelector(classname);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },50);
}