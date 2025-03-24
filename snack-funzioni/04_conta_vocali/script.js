/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// function countVowels (string){
//     const vowels = "aeiou"
//     let count = 0;
//     for(const char of string){
//         if (vowels.includes(char)){
//         count ++
//         }
// }
// return count
// }

const countVowels = (string) => {
    const vowels = "aeiou"
    let count = 0;
        for(const char of string){
         if (vowels.includes(char)){
            count ++
            }
}
return count
}

// Invoca la funzione qui e stampa il risultato in console
let numbersVowels = countVowels(word);
console.log(numbersVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)