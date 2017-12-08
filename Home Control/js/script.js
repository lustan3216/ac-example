//Gloabal Variable
var timeLeft=10;
var counter=setInterval(timer, 1000);
var images = ["img/bedroom.png","img/nightLamp.png",];
var currentPos = 0;

var changeSrc = function() {
    if (++currentPos >= images.length) currentPos = 0;
            image.src = images[currentPos];
}

function timer() {
  timeLeft=timeLeft-1;
  if (timeLeft <= 0) {
        timeLeft=10
        changeSrc();
  }
  document.getElementById("timer").innerHTML = timeLeft;
}