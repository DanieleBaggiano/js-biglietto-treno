// chiedo al passeggero quanti chilometri deve percorrere
let userKm = prompt("Quanti chilometri devi percorrere?"); // string | null
console.log(userKm, typeof userKm);

// chiedo al passeggero quanti anni ha
let userAge = prompt("Quanti anni hai?") // string | null
console.log(userAge, typeof userAge);

userKm = parseInt(userKm); // number
console.log(userKm, typeof userKm);

userAge = parseInt(userAge); // number
console.log(userAge, typeof userAge);

const prezzoAlKm = 0.21;
let total = userKm * prezzoAlKm;

if (userAge < 18) {
    let scontoMinorenne = total * 0.80;
    console.log("Il passeggero ha diritto al 20% di sconto." + scontoMinorenne);
    document.getElementById("prezzototale").innerHTML = `${total.toFixed(2)} €, ${scontoMinorenne.toFixed(2)} €`
} else if (userAge > 65) {
    let scontoAnziani = total * 0.60;
    console.log("Il passeggero ha diritto al 40% di sconto." + scontoAnziani);
    document.getElementById("prezzototale").innerHTML = `${total.toFixed(2)} €, ${scontoAnziani.toFixed(2)} €`
} else {
    console.log(total.toFixed(2));
    document.getElementById("prezzototale").innerHTML = `${total.toFixed(2)} €`
}