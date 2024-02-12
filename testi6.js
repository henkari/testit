/*
Tee funktio, jonka avulla annetun puhelinluettelon yhteystieto voidaan päivittää annetun id:n ja 
uuden puhelinnumeron avulla. Uuden puhelinnumeron on oltava validi. 
Funktio palauttaa uuden päivitetyn puhelinluettelon tai heittää virheen, jos yhteystietoa ei löydy.
Testaa funktion toiminta erilaisilla syötteillä.
Vinkki: Käytä id:n luomiseen muuttujaa, joka kasvaa jokaisella kutsulla yhdellä.
/***/
const rexex=require('./rexextesti1')

let nextId=0
function createContact(fname,lname,pnumber){

if(!fname||!lname){
    throw new Error('etunimi ja sukunimi pakollisia')
}
let formattedPnumber=''
try {
    formattedPnumber=rexex(pnumber)
} catch (error) {
    throw error
}

    return {
        id:nextId++,
    fname,
    lname,
    pnumber:formattedPnumber
}
}
module.exports=createContact;
createContact('henri','kaksonen','')