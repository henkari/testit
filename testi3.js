const rexex=require('./rexextesti1')


function objectToHtml(obj){
 let html=''  
    if(!obj.fname||!obj.lname){
        throw new Error('etunimi ja sukunimi pakollisia')
    }
     try{

    rexex(obj.phone)
       
 }
catch(error){
    throw error
 }
 
  
 for (const [key,value] of Object.entries(obj)){
        html+=`<li>${key}: ${value}</li>`
        
 }
 
return html
}
module.exports=objectToHtml
//console.log(objectToHtml([{'etunimi':'nimi','sukunimi':'nimi','puhelin':'050'},{'etunimi':'nimi','sukunimi':'nimi','puhelin':'050'}]))