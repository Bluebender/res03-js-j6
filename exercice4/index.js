let numbers = [32, 43, 56, 24, 78, 42];

// Toutes les secondes, affichez un nouveau nombre du tableau. Lorsque vous arrivez à la fin du tableau : stoppez le processus.

window.addEventListener("DOMContentLoaded", function(){

    for (number of numbers){
        console.log(number);
        let timeoutId = setTimeout(function(){
        }, 1000);
    }
});