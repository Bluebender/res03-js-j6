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
    let circle = {
        color: "blue",
        radius:10,
        x:220,
        y:135
    };
    let canvasDom = document.querySelector('#ex5');
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = circle.color;
    
    let radius_max
    if (canvas.height<canvas.width){
        radius_max = canvas.height/2-5;
    }
    else{
        radius_max = canvas.width/2-5;
    }
    // console.log(canvas.height)
    // console.log(canvas.width)
    // console.log(radius_max)
    
    let radius = 10;
    let intervalId = setInterval(function(){
        if (radius < radius_max){
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            ctx.beginPath(); 
            ctx.arc(circle.x, circle.y, radius, 0, 2 * Math.PI);
            ctx.fill(); 
            // console.log(x);
            radius=radius+10;
        }
        else{
            clearInterval(intervalId);
        }
    }, 100);
}

function exercice6()
{
// Vous avez dans les fichiers des exercices, un fichier pacman.png avec un pacman bouche ouverte d'environ 100px de rayon.
// Faites en sorte de lui faire ouvrir et fermer la bouche toutes les secondes, et faites en sorte que le fond de votre canvas soit gris foncé.


    let yellow = "#FFD65B";

    // Déclaration du canvevas        
    let canvasDom = document.querySelector('#ex6');
    let ctx = canvasDom.getContext('2d');

    // Couleur de fond
    // On dit au contexte que la couleur de remplissage est gris 
    ctx.fillStyle = '#DDDDDD'; 
    // On rempli le Canvas de gris en fond 
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    // Ajout de l'image    
    // On créer un nouvel Objet du DOM avec JS.
    let myImg = new Image();
    // On définie la source de cette image
    myImg.src = 'pacman.png';
    // Quand l'image est chargée par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg,100,50);
    };
    // ctx.drawImage(image, dx, dy, dLargeur, dHauteur); 

    let circle = {
    color: yellow,
    radius:100,
    x:200,
    y:150
    };

    let swich=0;
    let i = 0;
    
    let intervalId = setInterval(function(){
        if (i<20){

            if (swich===0){
                
                ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
    
                // Couleur de fond
                // On dit au contexte que la couleur de remplissage est gris 
                ctx.fillStyle = '#DDDDDD'; 
                // On rempli le Canvas de gris en fond 
                ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
        
                ctx.fillStyle = circle.color;
                ctx.beginPath(); 
                ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                ctx.fill();
                
                swich=1;
            }
            else{
                
                ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
    
                // Couleur de fond
                // On dit au contexte que la couleur de remplissage est gris 
                ctx.fillStyle = '#DDDDDD'; 
                // On rempli le Canvas de gris en fond 
                ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    
                // Ajout de l'image    
                // On créer un nouvel Objet du DOM avec JS.
                let myImg = new Image();
                // On définie la source de cette image
                myImg.src = 'pacman.png';
                // Quand l'image est chargée par le navigateur on la place dans le Canvas
                myImg.onload = function () {
                    //On place l'image
                    ctx.drawImage(myImg,100,50);
                };
                // ctx.drawImage(image, dx, dy, dLargeur, dHauteur); 
    
                swich=0;            
            }
            i=i+1
            console.log(i)
        }
        else{
            clearInterval(intervalId);
        }
    }, 0.2*1000);
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