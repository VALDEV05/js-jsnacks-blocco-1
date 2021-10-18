/* ESERCIZIO 5
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */

//crea un arrat VUOTO
//chiedi all'utente per 6 volte un numero
// se dispari allora inseriscilo
//fai il modulo di 2 se il resto è ≠ da 0 allora dispari
//.push per aggiungere

const arrayToAdd = []
console.log(arrayToAdd);
const placeToPrint = document.querySelector('.result')
for (let index = 0; index < 6; index++) {
    const element = index;
    console.log(element);
    const numberUser = parseInt(prompt('inserisci un numero'))
    if ((numberUser % 2) != 0) {
        console.log('dispari')
        arrayToAdd.push(numberUser)
    } else {
        console.log('pari');
    }

}
placeToPrint.innerHTML = arrayToAdd
console.log(arrayToAdd);
