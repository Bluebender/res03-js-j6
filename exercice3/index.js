// Utilisez le tableau ci dessus qui indique des temps en secondes. Vous allez lancer des setTimeout.

// Le premier aura le délai de la première valeur du tableau, le second la secondes et le troisième la troisième.

// Vous devez lancer le second setTimeout dans le premier et le troisième dans le second.

// Dans chaque setTimeout, faites un console.log du délai qui était le sien.

let times = [1, 2, 3];

window.addEventListener("DOMContentLoaded", function(){

    let timeoutId1 = setTimeout(function(){
    
        console.log(timeoutId1);
    
        let timeoutId2 = setTimeout(function(){
        
            console.log(timeoutId2);
            
            let timeoutId3 = setTimeout(function(){
                
                console.log(timeoutId3);
                
            }, times[2]*1000);
    
        }, times[1]*1000);

    }, times[0]*1000);

});

