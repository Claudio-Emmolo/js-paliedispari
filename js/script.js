// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma
const word = prompt('Inserisci una parola');




function checkPalindrome(string) {

  const wordCalculate = string.length;

  //Scorro le lettere della parola per metà della loro lunghezza ufficiale;
  for (let i = 0; i < wordCalculate / 2; i++) {

    // Controllo se la prima lettera è diversa dall'ultima;
      if (string[i] != string[wordCalculate - (i + 1)]) {
          return 'Non è palindroma';
      }
  }

  return 'È palindroma';
}

const result = checkPalindrome(word);

console.log (result);


















// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto.