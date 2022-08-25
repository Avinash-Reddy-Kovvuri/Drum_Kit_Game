
var no_butt = document.querySelectorAll(".drum").length;
function sound(ss){
    switch(ss){
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("kick-bass.mp3");
            kick_bass.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(buttonval){
    document.querySelector("."+buttonval).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+buttonval).classList.remove("pressed");
    },100);
}
for(var i =0;i<no_butt;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninner = this.innerHTML;
             sound(buttoninner);
             buttonAnimation(buttoninner);
         
    })};
    document.addEventListener("keypress",function(event){
        sound(event.key);
        buttonAnimation(event.key);
    })

 