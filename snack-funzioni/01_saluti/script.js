/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function myName (name){
//     return (`Ciao ${userName}`)
// }
const myName = () =>(`Ciao ${userName}`)

// Invoca la funzione qui e stampa il risultato in console
myName();
console.log(myName(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
