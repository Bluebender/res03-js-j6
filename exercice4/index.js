let numbers = [32, 43, 56, 24, 78, 42];

// Toutes les secondes, affichez un nouveau nombre du tableau. Lorsque vous arrivez à la fin du tableau : stoppez le processus.

window.addEventListener("DOMContentLoaded", function(){
        
        let i = 0;
        let intervalId = setInterval(function(){
        if (i < numbers.length){
            console.log(numbers[i]);
            i=i+1;
        }
        }, 1000);

});