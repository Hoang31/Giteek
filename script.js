"use strict"

//alert("Ton nom est : " + prompt("Rentrez un nom d'utilisateur",""));

/*let a = 4;
let b = 10;

let resultat = alert((a + b <4) ? "Below" : "Over"); */

/*let login
let message

login = prompt("Qui-êtes-vous ?","");
message =
    login == "Employee" 
    ? "Hello" 
    : login == "Director" 
    ? "Greetings" 
    : login == "" 
    ? "No login" 
    : "";
alert(message);*/

let userAnswer;
let adminPassword;

userAnswer = prompt("Who's there ?", "");

userAnswer == "Admin"
    ? (adminPassword = prompt("Password ?"))
        (adminPassword == "TheMaster"
            ? alert("Welcome !")
            : (adminPassword == undefined
                ? alert("Canceled")
                : alert("Wrong password")))
    : (userAnswer == undefined
        ? alert("Canceled")
        : alert("Incorrect user"));