/*    
    updateContactById päivittää olemassa olevan yhteystiedon oikein.
•	updateContactById heittää virheen, jos yhteystietoa ei löydy annetulla id:llä.
•	updateContactById heittää virheen, jos annettu uusi puhelinnumero ei ole validi
/***/

const updateContact=require('./testi6Update')

describe('testi6Update',()=>{
    it('päivittää olemassa olevan yhteystiedon oikein',()=>{
    let luettelo=[{id:0,fname:'henri', lname:'kaksonen',pnumber:'000000'}]
    let newNumber='900099'
   updateContact(luettelo,0,newNumber)
    expect(luettelo[0].pnumber).toBe(newNumber)
})
it('heittää virheen yhteystiedosta',()=>{
   const luettelo=[{id:0,fname:'henri', lname:'kaksonen',pnumber:'000000'}]
  expect(()=>updateContact(luettelo,1,'009985')).toThrowError('henkilöä ei löydy')
  expect(()=>updateContact(luettelo,0,'00')).toThrowError('Invalid phone number format')
})
})