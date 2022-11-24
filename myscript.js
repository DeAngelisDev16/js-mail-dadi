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
// recupero input e button dall'html con la creazione di due variabili:
let playerNumber = document.getElementById('playerNumber');
let button = document.getElementById('gameButton');




// Al click del button, inizia il gioco.
   // - viene generato un numero random dal computer;
           //- se il numero random generato è maggiore di quello dell'utente, vincerà il computer;
           //- in caso contrario vincerà l'utente;

button.addEventListener('click', function(){
    for (i = 1; i <=6; i++){
        let randomNumber = Math.floor(Math.random() * 7);
        console.log(randomNumber);
        
    }

    if (parseInt(playerNumber.value) < randomNumber){
        document.getElementById('output').innerHTML = 'Vince il computer';
    } else {
        document.getElementById('output').innerHTML = 'Hai vinto!';

    }

    
})           


