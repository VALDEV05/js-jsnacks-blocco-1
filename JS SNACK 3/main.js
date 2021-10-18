/* ESERCIZIO 3
    Il software deve chiedere per 10 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti. */


//chiedo per 10 volte un numero
//faccio la somma
//stampo la somma


//chiedo per 10 volte un numero

let sum = 0;

for (let index = 0; index < 10; index++) {
    console.log(index)
    const numberUser = parseInt(prompt('inserisci un numero'))
    //faccio la somma
    sum = sum + numberUser
}
//stampo la somma
console.log(sum)
const result = `La somma dei numeri inseriti è ${sum}`
const placeToPrint = document.querySelector('.divSum')
placeToPrint.innerHTML = result