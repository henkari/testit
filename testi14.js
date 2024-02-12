/*
Tee funktio, joka etsii niiden henkilöiden nimet, joiden on missed calls -kentässä on nollasta poikkeava 
lukuarvo ja tulostaa tiedot HTML-listana (esim. <li>Etunimi Sukunimi, 6</li>).
Vinkki 1: filter
Vinkki 2: map
/***/
function html_lista(luettelo){
    const lowerFname=fname.toLowerCase()
    const lowerLname=lname.toLowerCase()
    
    const entry=luettelo.filter(entry => entry.fname.toLowerCase() !== lowerFname && entry.lname !== lowerLname);
   return entry
}

console.log(html_lista([{fname:'henri', lname:'kaksonen', missed_calls:2},
{fname:'jukka', lname:'korhonen', missed_calls:0}]))
