/* ESERCIZIO 7
    Stampa le potenze di 2 fino a 1000. */

//scrivo numeri da 0 a 1000
//calcolo la potenza
//Math.pow(base, exponent)

const placeToPrint = document.querySelector('.result')
for (let i = 0; i <= 1000; i++) {
    let pow = Math.pow(2, i)
    console.log(pow)
    let result = `<ul><li>2 alla ${i} è uguale a ${pow}</li></ul>`
    placeToPrint.innerHTML += result;
}