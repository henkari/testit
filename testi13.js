/*
Tee funktio, joka laskee kaikkien soitettujen puheluiden yhteiskeston sekunteina, kun se saa taulukon, 
jossa on useita callLog-olioita.
Testaa funktion toiminta.
Vinkki 1: map
Vinkki 2: reduce
/***/
function puheluidenYhteiskesto(array){
    return array.reduce((sum, num)=>{
        alkuaika=new Date(num.alkuaika)
        loppuaika=new Date(num.loppuaika)
        kesto=loppuaika-alkuaika;
        return ((sum+kesto)/1000)/60;
    },0)
}
console.log(puheluidenYhteiskesto([{id:0, alkuaika:'2023-11-22T09:00:00Z', loppuaika:'2023-11-22T09:15:12Z'},
{id:1, alkuaika:'2023-11-22T08:01:00Z', loppuaika:'2023-11-22T08:25:10Z'}]))

