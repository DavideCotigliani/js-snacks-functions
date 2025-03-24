/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greetings = (string) => {

    const hours= new Date().getHours;

let hi;
if(hours<13){
    hi= (`Buongiorno`)
}
else if (hours<17){
    hi = (`Buon pomeriggio`);
    
}
else{
    hi = (`Buonasera`)
    
}
return `${hi} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.