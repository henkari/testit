/*•	
    createContact luo oikein muotoillun yhteystiedon uniikilla id-kentällä.
•	updateContactById päivittää olemassa olevan yhteystiedon oikein.
•	updateContactById heittää virheen, jos yhteystietoa ei löydy annetulla id:llä.
•	updateContactById heittää virheen, jos annettu uusi puhelinnumero ei ole validi
/***/



const createContact=require('./testi6')

describe('testi6', ()=>{
    it('luo yhteystiedon uniikilla id-kentällä', ()=>{

    
    const contact=createContact('kalle','väänänen','0506677')
    expect(contact).toHaveProperty('id')
    expect(typeof contact.id).toBe('number')
    expect(contact).toEqual(expect.objectContaining({fname:'kalle',
                                            lname:'väänänen',
                                            pnumber:'0506677'
}))
    })
    it('päivittää olemassaolevan yhteystiedon oikein',()=>{

    })
    
})