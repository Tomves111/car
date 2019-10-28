//create canvas element
let canvas = document.createElement('canvas');
b = canvas.getContext('2d');
//define a width and height of route(5x5)
canvas.width = 500;
canvas.height = 500;
//append canvas element into body in main page(index.html)
document.body.appendChild(canvas)
//create variables and give it to start position
let posX = 100;
posY = 100;
//set the velocity and direction
dx = 1;
dy = 0;
//arrow function according to es6
setInterval ( () =>
{
//give color to our route
this.b.fillStyle = "black";
b.fillRect(0,0,canvas.width,canvas.height);
    posX += dx;
    posY += dy;
//here we just set the border of side a
if (posX > 400)
{
    dx = 0;
    posX = 400;
}
//here we just set the border of side b
if (posX < 0)
{
    dx = 0;
    posX = 0;
}
//here we just set the border of side c
if (posY > 400)
{
    dy = 0;
    posY = 400;
}
//here we just set the border of side d
if (posY < 0)
{
    dy = 0;
    posY = 0;
}
//give color to our car and set size 
this.b.fillStyle = "white";
b.fillRect(posX,posY,100,100);
}, 20);
//set event for change direction
window.addEventListener('keydown', press01, true);
//to move it we need to know the codes for the arrow keys
function press01(event) 
{
    switch (event.keyCode)
    {
        //here the keycode is 37
        case 37:
            dx = -1;
            dy = 0;
            break;
        //here the keycode is 38
        case 38:
            dx = 0;
            dy = -1;
            break;
        //here the keycode is 39
        case 39:
            dx = 1;
            dy = 0;
            break;
        //here the keycode is 40
        case 40:
            dx = 0;
            dy = 1;
            break;
    }
}