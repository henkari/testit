const rexex=require('./rexextesti1')

function contactToString(fname,lname,pnumber){

    if(!fname||!lname){
        throw new Error('etunimi ja sukunimi pakollisia')
    }
   
    let formattedpnumber='';
    try{
    formattedpnumber=rexex(pnumber)

    }catch(e){
       console.error(e.message)
    }
    
    const contact={
        fname,
        lname,
        pnumber:formattedpnumber
    }
    return contact
}
module.exports=contactToString;
//console.log(contactToString('harri','harri','00'))