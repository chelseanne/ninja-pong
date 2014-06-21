var canvas = SVG("game").size(500, 500);
var rect = canvas.rect(20, 150).attr({ fill: "rgb(231, 200, 255)" });

var direction = 0;
var DOWN_KEY = 40;
var UP_KEY = 38;
var SPEED = 5;

$(document).keydown(function(event) {
  //run every time key 40 is pressed down
  if (event.which == DOWN_KEY) {
    direction = 1;
  }
  if (event.which == UP_KEY) {
    direction = -1;
  }

})
$(document).keyup(function(event) {
  //run every time key 40 is pressed down
  if (event.which == DOWN_KEY) {
    direction = 0;
  }
  if (event.which == UP_KEY) {
    direction = 0;
  }
})

window.setInterval(function() {
  rect.move(rect.x(), rect.y() + (SPEED * direction))

}, 1000/100)
