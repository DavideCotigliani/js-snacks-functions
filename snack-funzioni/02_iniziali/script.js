/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function newArray(string){
// return string.map (name => name[0].toUpperCase());
// }
const newArray = (string) => {
    return string.map (name => name[0].toUpperCase());
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetters = newArray(names);
console.log(firstLetters);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]