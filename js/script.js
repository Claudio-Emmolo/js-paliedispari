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
