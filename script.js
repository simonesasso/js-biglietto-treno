// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.


// chiedo allutente i km da percorrere e valorizzo relativa variabile
var kmPercorso = prompt("inserisci i km da percorrere");
// chiedo allutente la sua età e valorizzo relativa variabile
var età = prompt("inserisci la tua età");
// dichiaro variabile del prezzo e del prezzo approssimato
var prezzo, prezzoApprossimato;
// calcolo il prezzo del biglietto
if(età < 18){
  prezzo = (kmPercorso*0.21)-((kmPercorso*0.21)*20)/100;
}else if (età > 65) {
  prezzo = (kmPercorso*0.21)-((kmPercorso*0.21)*40)/100;
}else {
  prezzo = kmPercorso * 0.21;
}
// approssimo il prezzo per difetto se non è gia un numero intero e tengo solo 2 cifre decimali
if (!Number.isInteger(prezzo)) {
  prezzoApprossimato = Math.floor(prezzo * 100) / 100;
  alert("ho approssimato il prezzo per difetto");
}else{
  prezzoApprossimato = prezzo;
}
// visualizzo il prezzo prendendo solo due cifre decimali
document.getElementById('my-id').innerHTML="Il prezzo del biglietto è: " + prezzoApprossimato + "$";
