/* ESERCIZIO 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/


//utente inserisce due numeri con dei prompt
//il software stampa il maggiore

//se numberFirst = numberSecond
//numeri uguali
//altrimenti se numberFirst > numberSecond
//numberFirst maggiore
//altrimenti 
//numberSecond maggiore



//richiesta
const numberFirst = parseInt(prompt('inserisci un numero'))
const numberSecond = parseInt(prompt('inserisci un numero'))
console.log(numberFirst, numberSecond)
let result;
//verifica tra due numeri il maggiore
if (numberFirst == numberSecond) {
    console.log('numeri uguali')
    result = 'I numeri inseriti sono <span> uguali</span>'
} else if (numberFirst > numberSecond) {
    console.log('numberFirst maggiore')
    result = `Il primo numero (${numberFirst}) è il <span> maggiore</span>`

} else {
    console.log('numberSecond maggiore')
    result = `Il secondo numero (${numberSecond}) è il <span> maggiore</span>`
}


const placeToPrint = document.querySelector('.divNumber')
placeToPrint.innerHTML = result