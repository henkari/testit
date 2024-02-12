/*
Tee funktio, joka tulostaa puhelinluettelon sukunimen mukaisesti aakkosjärjestyksessä 
HTML-listana (käytä apuna tehtävän 4 funktiota).
Testaa funktion toiminta erilaisilla syötteillä.
Vinkki: sort
/***/
const html=require('./testi4')
function sort(luettelo){
let sortedLuettelo=luettelo.sort((a,b)=>{
    if(a.lname.toLowerCase()<b.lname.toLowerCase()){
        return -1
    }
    if(a.lname.toLowerCase()>b.lname.toLowerCase()){
        return 1
    }
    return 0
})
let htmlList=html(sortedLuettelo)
return htmlList
}
module.exports=sort;
console.log(sort([{fname:'henri', lname:'kaksonen', phone: '00077766'},
{fname:'jukka',lname:'horttanainen',phone:'007766'},
{fname:'cccc',lname:'ccccc',phone:'77777'},
{fname:'hooo',lname:'kikiki',phone:''},
{fname:'hohho',lname:'kkölöö',phone:'101010'}
]))