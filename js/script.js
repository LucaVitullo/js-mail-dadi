/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
let email = prompt("Qual'è la tua email?").toLowerCase();
let emailUsers = ["luca@gmail.com", "giovanni@gmail.com","pietro@gmail.com"];
let validEmail = "";
console.log("La tua email è " + email);

for (let i = 0; i < emailUsers.length; i++){

    if(email === emailUsers[i]){
        console.log("email verificata")
        validEmail = true;

    }
    else{
        console.log("email inesistente")
        validEmail = false;

    }
    
}
/*Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
/*
let dadoPlayer = Math.floor((Math.random() * 6)+ 1)
let dadoComputer = Math.floor((Math.random() * 6)+ 1)

console.log("Ti è uscito " + dadoPlayer);
console.log("Al computer è uscito " + dadoComputer);

if(dadoPlayer > dadoComputer){
    console.log("hai vinto")
}
else if(dadoComputer > dadoPlayer){
    console.log("hai perso")
}
else{
    console.log("hai pareggiato")
}
*/

