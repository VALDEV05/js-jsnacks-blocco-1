/* ESERCIZIO 9
    Calcola la somma e la media dei primi 10 numeri. */


//scrivi 10 numeri
//calcola la somma di essi 
//calcola la media

const iteration = 10;
let somma = 0;
const placeToPrint = document.querySelector('.result')
for (let index = 1; index <= iteration; index++) {
    //somma
    somma = somma + Number(index);
}
//stampa somma
console.log(somma)
placeToPrint.innerHTML = `La somma dei primi ${Number(iteration)} numeri è ${somma}`
//calcolo media
const media = somma / iteration
console.log(media)
placeToPrint.innerHTML += `<br>La media dei primi ${Number(iteration)} numeri è ${media}`
