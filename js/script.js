/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
let email = prompt("Qual'è la tua email?").toLowerCase()
let emailUsers = ["luca@gmail.com", "giovanni@gmail.com","pietro@gmail.com"]

console.log("La tua email è " + email);

for (let i = 0; i < emailUsers.length; i++){

    if(email === emailUsers[i]){
        console.log("email verificata")
    }
    else(email !== emailUsers);{
        console.log("email inesistente")
    }
}


