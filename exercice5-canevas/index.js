function exercice1()
{
    // L'objet du DOM Canvas
    let  canvasDom  =  document.querySelector('#ex1');
    
    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let  ctx  =  canvasDom.getContext('2d');
    
    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle  =  "red";
    
    // On trace un nouveau rectangle rempli (fill) avec cette couleur (mais il n'a pas de contour)
    ctx.fillRect(100, 50, 200, 200);
}

function exercice2()
{
    let circle = {
        color: "blue",
        radius:100,
        x:200,
        y:150
    };
    
    canvasDom = document.querySelector('#ex2');
    ctx = canvasDom.getContext('2d');
    
    // On dit au contexte que la couleur de remplissage est rouge 
    ctx.fillStyle = circle.color;
    
    // on commence le tracé 
    ctx.beginPath(); 
    
    // on trace un arc fermé (un cercle) 
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

    // on dessine sur le canvas en remplissant le tracé 
    ctx.fill(); 
}

function exercice3()
{
let canvasDom = document.querySelector('#ex3');
let ctx = canvasDom.getContext('2d');
    
// On définie la police de caractère pour tous les textes
ctx.font = 'bold 58px Montserrat';

// Couleur pour écrire Hello
ctx.fillStyle ='black';

// On ecrit Hello
ctx.fillText('Geometry.io', 10, 150);

// ctx.fillText(texte, x, y);
}

function exercice4()
{
    let circle = {
        color: "blue",
        radius:100,
        x:200,
        y:100
    };
    let canvasDom = document.querySelector('#ex4');
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = circle.color;

    let x = 100;
    let intervalId = setInterval(function(){
        if (x < 280){
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            ctx.beginPath(); 
            ctx.arc(x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill(); 
            // console.log(x);
            x=x+10;
        }
        else{
            clearInterval(intervalId);
        }
    }, 100);
}

function exercice5()
{
// Dessiner un cercle bleu d'un rayon de 10px, au centre de votre canvas.
// Toutes les 0.1 secondes,le rayon du cercle va augmenter de 10px.
// Quand le rayon du cercle est égal à la moitié de la dimension la plus petite du canvas, arrêtez le grossissement.



}

function exercice6()
{

}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});