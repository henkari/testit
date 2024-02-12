const objectToHtml=require('./testi3')

describe('objectToHtml',()=>{
    it.skip('testaa, onko etu- ja sukunimi',()=>{
        expect(()=>objectToHtml({'etunimi':'','sukunimi':'nimi'})).toThrowError('etunimi ja sukunimi pakollisia')
        expect(()=>objectToHtml({'etunimi':'nimi','sukunimi':''})).toThrowError('etunimi ja sukunimi pakollisia')
    })
    it.skip('testaa puhelinnumeron',()=>{
        expect(objectToHtml({'etunimi':'nimi','sukunimi':'nimi','puhelin':'05067866'})).toEqual('<ul><li>etunimi: nimi</li></ul><li>sukunimi: nimi</li></ul><li>puhelin: 05067866</li></ul>')
        expect(()=>objectToHtml({'etunimi':'nimi','sukunimi':'nimi','puhelin':'05'})
    ).toThrowError('Invalid phone number format')
    })
    })
