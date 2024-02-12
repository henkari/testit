/*
Tee funktio, joka laskee yhden puhelun keston (sekunteina), kun se saa parametrina callLog-olion, 
joka kuvaavaa yhden soitetun puhelun tietoja:
yhteystiedon id johon soitettu
puhelun alkuaika datetime
puhelun loppuaika datetime
Testaa funktion toiminta.
/***/
function puhelunKesto(callLog){
    
    if (callLog&&callLog.start&&callLog.end&&callLog.start<callLog.end){
     id=callLog.id
     start=new Date(callLog.start)
     end=new Date(callLog.end)
     kesto=(end-start)/1000
}
    return {id:id,kesto:kesto+' s', alkuaika:start, loppuaika:end}
}
console.log(puhelunKesto({id:0, start:'2023-11-22T09:00:00Z' , end:'2023-11-22T09:15:00Z'}))