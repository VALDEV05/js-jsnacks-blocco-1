
/* ESERCIZIO 2
L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la più lunga.
 */

//utente inserisce due parole 
//stampare la più lunga
//trova lunghezza 1
//trova lunghezza 2
//confronta le lunghezze


//richiesta

const stringFirst = String(prompt('Scrivi una parola'))
const stringSecond = String(prompt('Scrivi una parola'))

/* console.log(stringFirst, stringSecond); */


//calcolo lunghezze
const lengthFirst = stringFirst.length;
const lengthSecond = stringSecond.length;
console.log(lengthFirst, lengthSecond);

//trovo la lunghezza maggiore 
//se lengthFirst = lengthSecond
//numeri uguali
//altrimenti se lengthFirst > lengthSecond
//lengthFirst maggiore
//altrimenti 
//lengthSecond maggiore


let result;
if (lengthFirst == lengthSecond) {
    console.log('uguali');
    result = `Ordino le stringhe in ordine di lunghezza 
    <ol>
    <li class=list>${stringFirst}</li>
    <li class=list>${stringSecond}</li
    </ol>`
} else if (lengthFirst > lengthSecond) {
    console.log('1 maggiore');
    result = `Ordino le stringhe in ordine di lunghezza 
    <ol>
    <li>${stringFirst}</li>
    <li>${stringSecond}</li
    </ol>`
} else {
    console.log('2 maggiore');
    result = `Ordino le stringhe in ordine di lunghezza 
    <ol>
    <li>${stringSecond}</li>
    <li>${stringFirst}</li>
    </ol>`
}
//stampo il risultato
const placeToPrint = document.querySelector('.divString')
placeToPrint.innerHTML = result
