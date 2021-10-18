/* ESERCIZIO 8
    Chiedi un numero di 4 cifre all’utente
    e calcola la somma di tutte le cifre che compongono il numero. */
//chiedi il numero
//verifica se il numero delle cifre è diverso da 4
//somma ogni cifra 
//stampa la somma

//chiedi il numero
const numberUser = String(prompt('inserisci un numero di 4 cifre'))
console.log(numberUser)
const length = numberUser.length
console.log(length)
let somma = 0

const placeToPrint = document.querySelector('.result')
if (length != 4) {
    console.log('ricarica la pagina');
    placeToPrint.innerHTML = `Il numero ${Number(numberUser)} ha ${length} non 4 cifre, impossibile fare la somma. <br>Ricarica la pagina e inserisci un numero con 4 cifre`

} else {
    console.log('somma');
    for (let index = 0; index < length; index++) {
        const element = Number(numberUser[index]);
        somma = somma + element
    }
    console.log(somma);
    placeToPrint.innerHTML = `Il numero era ${Number(numberUser)} e la somma delle sue cifre è: ${somma}`
}