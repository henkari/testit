const contactToString=require('./testi2')
describe('testi2',()=>{
    it.skip('testaa nimen puuttumisen',()=>{
        expect(()=>contactToString('','harri','0000000')).toThrowError('etunimi ja sukunimi pakollisia')
        expect(()=>contactToString('harri','','0000000')).toThrowError('etunimi ja sukunimi pakollisia')
    })
    it.skip('testaa numeron oikeellisuuden', ()=>{
        expect(contactToString('harri','harri','')).toEqual({ fname: 'harri', lname: 'harri', pnumber: '' });
        expect(contactToString('harri','harri','00')).toEqual({ fname: 'harri', lname: 'harri', pnumber: '' });
        
        
    
    })
}) 