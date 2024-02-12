const createContact=require('./testi6')
const rexex=require('./rexextesti1')
function updateContact(luettelo, id, newNumber){
const index=luettelo.findIndex(contact=>contact.id===id)
if(index===-1){
    throw new Error('henkilöä ei löydy')
}
try {
    rexex(newNumber)
} catch (error) {
    throw error
}

luettelo[index].pnumber=newNumber
    return luettelo
}
module.exports=updateContact;
//luettelo=[createContact('henri','kaksonen','000'),createContact('jjj','kkk','06064'),createContact('jojo','kok','064464')]


//console.log(updateContact(luettelo,2,'000000'))
