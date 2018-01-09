"use strict";
var state = "on";

    function toggleLight() {
      var img = document.getElementById('image');
      if ( state == "on" ) {
        state = "off";
        img.src = "img/off.jpg";
      } else {
        state = "on";
        img.src = "img/on.jpg";
      }
    }

    var timeLeft = 5;

    function countDownTimer() {
      timeLeft = timeLeft - 1;
      if (timeLeft <= 0) {
            document.getElementById("image").src = "img/off.jpg";
            clearInterval(setting);
      }
      document.getElementById("timer").innerHTML = timeLeft;
    } 

    var setting = setInterval(countDownTimer, 1000);