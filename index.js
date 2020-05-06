var numberOfDrums = document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerhtml = this.innerHTML;
    makeSound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  });

}


document.addEventListener("keydown",function (){
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key){

  switch(key)
  {
    case "w":
    {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
    case "a":
    {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    }
    case "s":
    {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    }
    case "d":
    {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
    case "j":
    {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    }
    case "k":
    {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    case "l":
    {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    }
  }

}

function buttonAnimation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100);

}
