/* ESERCIZIO 4
    In un array sono contenuti i nomi degli invitati alla festa del grande
    Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */





//crea lista invitati 
const arrayInvited = [
    'valerio',
    'daniele',
    'andrea',
    'chiara',
    'davide',
    'fabio',
    'tiziano',
    'fabiola'
]
const placeToPrint = document.querySelector('.divResult')

const nomeUser = String(prompt('inserisci il tuo  nome')).toLocaleLowerCase()
console.log(nomeUser)
let show = false;

for (let i = 0; i < arrayInvited.length; i++) {
    const element = arrayInvited[i];
    if (nomeUser == element) {
        show = true
    }
}

console.log(show);

//verifica se il nome è presente nella lista
let result;
if (show == true) {
    result = `COMPLIMENTI PUOI PASSARE`
} else {
    result = `MI DISPIACE MA NON PUOI PASSARE`

}
placeToPrint.innerHTML = result
//comunica se può passare