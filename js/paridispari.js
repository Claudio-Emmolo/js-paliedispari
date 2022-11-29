// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto.

let userChoose;
let userNumber;

do{
  userChoose = prompt('Scegli "pari" o "dispari"?');
} while ((userChoose != 'pari') && (userChoose != 'dispari' ));

do{
  userNumber = prompt('Scegli un numero tra 1 e 5');
} while ((userNumber < 1) || (userNumber > 5 ));


