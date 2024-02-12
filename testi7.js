/*
Tee funktio, joka poistaa yhteystiedon puhelinluettelosta, kun yhteystiedon etunimi ja sukunimi annetaan 
parametreina. Funktion tulee toimina isoilla ja pienillä kirjaimilla (case insensitive). 
Funktio palauttaa uuden puhelinluettelon tai heittää virheen, jos yhteystietoa ei löydy.
Testaa funktion toiminta erilaisilla syötteillä.
Vinkki: filter
/***/
function poista(luettelo,fname,lname){
    if(!fname || !lname){
        throw new Error('etu- ja sukunimi pakollisia')
    }
    
    const lowerFname=fname.toLowerCase()
    const lowerLname=fname.toLowerCase()
    const result = luettelo.filter(entry => entry.fname.toLowerCase() !== lowerFname && entry.lname !== lowerLname);
 


   

    return result

}
console.log(poista([{fname:'Henri', lname:'kaksonen'},{fname:'jukka',lname:'korhonen'}],'HENRI','kaksonen'))