// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

// variabile in input per l'utente che scriverà un testo
var testo = prompt('Inserisci un testo');
// trasformo qualsiasi parola l'utente inserisca in minuscolo
testo = testo.toLowerCase();
// per dividere tutte le parole del testo in un array ed eliminare i problemi di punteggiatura
var testo_diviso = testo.split(/[\s!?.,]+/);

var badword_index = 0;

console.log('Testo: ' + testo);
console.log('Parole totali del testo: ' + testo_diviso.length);
console.log('Testo diviso in un array: ');
console.log(testo_diviso);

document.writeln('Testo inserito: <br>' + testo + '<br>');

var parole_censurate = prompt('Inserisci le parole che vorresti censurare nel testo');
parole_censurate = parole_censurate.toLowerCase();

// per dividere tutte le parole da censurare in un array di stringhe
var parole_censurate_divise = parole_censurate.split(/[\s!?.,]+/);

console.log('Parole da censurare:');
console.log(parole_censurate_divise);

function Censured(){
  // scorro prima il primo array (del mio testo)
  for(var i = 0; i < testo_diviso.length; i++){
    // scorro per ogni parola dell'array del mio testo l'array delle parole censurate per vedere se c'è una corrispondenza
    for(var j = 0; j < parole_censurate_divise.length; j++){
      // se trova una parola uguale allora la sostituirà con 'xxx'
      if(testo_diviso[i] == parole_censurate_divise[j]){
        testo_diviso[i] = 'xxx';
        badword_index += 1;
      }
    }
  }
}

Censured();

// ricostruisco il testo dall'array
var joined_text = testo_diviso.join(' ');

console.log('Testo con censure:');
console.log(joined_text);
document.writeln('<br>Testo con parole censurate: <br>' + joined_text);

// prendo l'ultimo elemento dell'array
var last_item_of_array = testo_diviso[testo_diviso.length - 1];
// se l'ultimo elemento dell'array testo è un . , ? ! allora sarà vuoto quindi nella visualizzazione finale lo toglierò
if(last_item_of_array == ''){
  document.writeln('<br><br>Parole censurate: ' + badword_index + ', su un totale di : ' + (testo_diviso.length-1) + ' parole');
} else {
  // altrimenti l'ultimo elemento rimarrà
  document.writeln('<br><br>Parole censurate: ' + badword_index + ', su un totale di : ' + testo_diviso.length + ' parole');
}
