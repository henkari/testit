/*
Tee testidataksi vähintään kolme yhteystieto-oliota sisältävä puhelinluettelo-taulukko eli array (phonebook). 
Voit käyttää testidatan luomiseen tehtävässä 2 tehtyä funktiota.

Tee funktio, joka saa parametrina edellä tehdyn kontaktiolioita sisältävän puhelinluettelo-arrayn ja joka 
palauttaa puhelinluettelossa olevien henkilöiden nimet ja puhelinnumerot HTML-listana eli <ul></ul> - 
tägien sisälle luotuina <li></li> - elementteinä. 
Käytä apuna tehtävän 3 funktiota.
/***/ 
const testi3=require('./testi3')
function phonebook(array){
 


//const map1 = array1.map((x) => x * 2);
    modifiedArray=array.map(item=>{
      itemx=testi3(item)
        
      return itemx

    })
    return '<ul>' + modifiedArray + '</ul>';
}
module.exports=phonebook;
//console.log(phonebook([{'etunimi': "hhhh", 'sukunimi':'hhhhh','puhelin':'05043221'},{'etunimi': "hhhh", 'sukunimi':'hhhhh','puhelin':'05000'},{'etunimi': "hhhh", 'sukunimi':'hhhhh','puhelin':'05043221'} ]))