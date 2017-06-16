/**
 * Generates random particles using canvas
 * 
 * @class Particles
 * @constructor
 */
var myCanvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

//canvas size
var W = 500; var H = 500;

//canvas color
ctx fillStyle = "gray";
ctx.fillRect(0, 0, W, H);

//animate particle
function draw ()
{

//draw particle
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(200, 200, 40, Math.PI*2, false);
ctx.fill();

}

setInterval(draw, 33);