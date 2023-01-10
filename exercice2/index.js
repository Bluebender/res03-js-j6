
window.addEventListener("DOMContentLoaded", function(){

let intervalId = setInterval(function(){

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    alert(`${hours} heures ${minutes} minutes ${secondes} secondes`);
}, 1000*4.2);

});

