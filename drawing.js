const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

function prepareCanvas(){
 //console.log('Preparing Canvas');
 /* Fungsi console.log() adalah fungsi untuk menampilkan teks ke console Javascript. Fungsi console.log() biasanya digunakan untuk debugging. Karena setiap pesaan error di Javascript selalu ditampilkan di dalam Console */
  canvas = document.getElementById('my-canvas'); /*The getElementById() method returns the element that has the ID attribute with the specified value.*/
 context= canvas.getContext('2d');

 context.fillStyle = BACKGROUND_COLOUR;
 context.fillRect(0,0, canvas.clientWidth,canvas.clientHeight);

context.strokeStyle = LINE_COLOUR;
context.lineWidth = LINE_WIDTH;
context.lineJoin = 'round';

var isPainting = false;

 document.addEventListener ('mousedown', function (event){ //console.log('mouse pressed');
 isPainting = true;
 currentX = event.clientX - canvas.offsetLeft;
 currentY = event.clientY- canvas.offsetTop;
  }); /*The document.addEventListener() method attaches an event handler to the document.*/


  document.addEventListener('mousemove', function (event){
if(isPainting){
        previousX = currentX;
        currentX = event.clientX - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.clientY- canvas.offsetTop;

        /*console.log(`Current X: ${currentX}`);*/
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(currentX,currentY);
        context.closePath();
        context.stroke();
}
  });

  document.addEventListener('mouseup', function (event){ //console.log('mouse released');
  isPainting=false;
   });

//touchscreen

   canvas.addEventListener('mouseleave', function (event){
   isPainting=false;
    });

    canvas.addEventListener ('touchstart', function (event){ //console.log('touchdown');
    isPainting = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY- canvas.offsetTop;
     });

     canvas.addEventListener('touchend', function (event){
     isPainting=false;
      });

      canvas.addEventListener('touchcancel', function (event){
      isPainting=false;
       });

       canvas.addEventListener('touchmove', function (event){
     if(isPainting){
             previousX = currentX;
             currentX = event.touches[0].clientX - canvas.offsetLeft;

             previousY = currentY;
             currentY = event.touches[0].clientY- canvas.offsetTop;

             /*console.log(`Current X: ${currentX}`);*/
             context.beginPath();
             context.moveTo(previousX, previousY);
             context.lineTo(currentX,currentY);
             context.closePath();
             context.stroke();
     }
       });

}
function clearCanvas(){
   currentX = 0;
   currentY = 0;
   previousX = 0;
   previousY = 0;
   context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}
