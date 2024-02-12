/*
Tee funktio, joka käy läpi puhelinluettelon, ja lisää yhteystieto-olioon kentän missed calls ja 
asettaa sen arvon nollaksi. Jos kenttä on jo olemassa, se asetetaan nollaksi. Funktio 
palauttaa uuden puhelinluettelon.
Testaa funktion toiminta.
Vinkki: map
/***/
 function missed_calls(contact){
   
    return contact.map(item =>{
        if(!(missed_calls in contact)){

    return {...item, missed_calls:'0'}
        }
        return {...item, missed_calls:'0'}
   })

}
module.exports=missed_calls
console.log(missed_calls([{fname:'henri', lname:'kaksonen', phone: '00077766', missed_calls:'2'},
{fname:'jukka',lname:'horttanainen',phone:'007766'}]))