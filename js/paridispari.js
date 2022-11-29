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
  userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'), 10);
} while ((userNumber < 1) || (userNumber > 5 ));


const pcNumber = getRandomNumer(1, 5);

console.log(`Hai scelto ${userChoose}`, `e il numero ${userNumber}`);
console.log(`Il Computer ha scelto ${pcNumber}`);

const calcWin = pcNumber + userNumber;



  if ((calcWin % 2 == 0) && (userChoose == 'pari')){

    console.log('Che forza, hai vinto!!!');

  } else if ( (calcWin % 2 == 1) && (userChoose == 'dispari')){

    console.log('Che forza, hai vinto!!!');

  } else{

    console.log('Hai perso!!!');
    
  } 

















//-----------------------FUNZIONI-----------------------//

function getRandomNumer(starNumber, endNumber){

  const randomNumber = Math.floor(Math.random() * (endNumber - starNumber + 1) + starNumber);
  return parseInt((randomNumber), 10);

}