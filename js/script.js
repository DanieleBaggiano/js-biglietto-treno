// INPUT
let userKm = prompt("Quanti chilometri devi percorrere?"); // string | null
console.log(userKm, typeof userKm);

let userAge = prompt("Quanti anni hai?") // string | null
console.log(userAge, typeof userAge);

userKm = parseInt(userKm); // number
console.log(userKm, typeof userKm);

userAge = parseInt(userAge); // number
console.log(userAge, typeof userAge);

// PARTE LOGICA
const prezzoAlKm = 0.21;

let prezzoBase = userKm * prezzoAlKm; //  number
console.log(prezzoBase, typeof prezzoBase);

let sconto = 0

if (userAge < 18) {
    sconto = 20;
} else if (userAge > 65) {
    sconto = 40;
} 

console.log("Sconto in %", sconto);
const scontoTotale = prezzoBase * sconto / 100;
console.log("sconto in €", scontoTotale);

const prezzoFinale = prezzoBase - scontoTotale;
console.log("prezzo finale", prezzoFinale);

// OUTPUT
if (isNaN(userKm) === false && isNaN(userAge) === false && userKm > 0 && userAge > 0) {
    const messaggio = `
    <dl>
        <dt>Prezzo base:</dt>
        <dd>€ ${prezzoBase.toFixed(2)}</dd>

        <dt>Sconto:</dt>
        <dd>${sconto} %</dd>

        <dt>Prezzo finale:</dt>
        <dd>${prezzoFinale.toFixed(2)}</dd>
    </dl>
    `;    

console.log(messaggio );    
document.getElementById("prezzototale").innerHTML = messaggio ;
}    else {
    alert("Dati errati!");
}