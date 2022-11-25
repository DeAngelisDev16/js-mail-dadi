/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! */

//gioco dadi:

let randomPlayerNumber = Math.floor(Math.random() * 6)+1;
console.log(randomPlayerNumber);

let randomComputerNumber = Math.floor(Math.random() * 6)+1;
console.log(randomComputerNumber);


if (randomPlayerNumber > randomComputerNumber){
    console.log('Hai vinto!');
} else if (randomPlayerNumber < randomComputerNumber){
    console.log('Hai perso contro il computer!');
} else {
    console.log('Parità!');
}


/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
 */

//recupero dall'html input utente
let emailInput = document.getElementById('emailInput');

//recupero dall'html il button per poi successivamente generare l'evento 'click'
let button = document.getElementById('button');

//creo array contenente email da controllare successivamente
const emailArray = ['alessio@ciao.it', 'paolo@ciaociao.it', 'giorgia@buonanotte.it'];

//Creo evento e solo dopo il click dell'utente, il sistema verificherà se la mail è presente;
    //- creo ciclo for per scorrere la lista;
    // - successivamente con l'if verifico se l'input utente è presente oppure no.

