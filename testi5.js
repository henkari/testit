/*
Tee funktio, joka etsii puhelinluettelosta nimen perusteella puhelinnumeron ja palauttaa sen. Funktion tulee toimina isoilla ja pienillä kirjaimilla (case insensitive).
Testaa funktion toiminta erilaisilla syötteillä.
Vinkki 1: find
Vinkki 2: toLowerCase()
/***/

function findPhoneNumber(array, name) {
    
    
    
        const lowerName = name.toLowerCase();
    const entry = array.find(entry => entry.etunimi.toLowerCase() === lowerName);
    
    
    
    
    return entry ? entry.puhelin : "Phone number not found"; // Return phone number if found, otherwise a message
}

console.log(findPhoneNumber([
    {'etunimi': "hhhh", 'sukunimi':'hhhh','puhelin':'050000'},
    {'etunimi': "hihi", 'sukunimi':'hhhhh','puhelin':'05000'},
    {'etunimi': "hoho", 'sukunimi':'hhhhh','puhelin':'05043221'}
], 'hoho'));