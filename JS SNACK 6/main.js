/* ESERCIZIO 6
    Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. */


//chiedi un numero N all'utente

const numberN = Number(prompt('inserisci un numero'))
console.log(numberN)
const placeToPrint = document.querySelector('.result')
let cubo;
//se numberN == 0 --> 1
if (numberN == 0) {
    cubo = 1
} else {
    //calcolo cubo
    cubo = numberN * numberN * numberN
    console.log(cubo)

}
//stampa cubo del numero N
placeToPrint.innerHTML = `Il cubo del numero ${numberN} è ${cubo}`