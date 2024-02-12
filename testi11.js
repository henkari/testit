/*
Tee funktio, joka laskee kaikista puhelinluettelon yhteystiedoista, montako missed calls:ia on yhteensä.
Testaa funktion toiminta.
Vinkki 1: map
Vinkki 2: reduce
/***/
function countMissedCalls(array){
    
    
    return array.reduce((sum, obj)=>{
        if(obj.missed_calls){
            return sum+obj.missed_calls
        }else{
            return sum
        }
    },0)
}
console.log(countMissedCalls([{fname:'henri', lname:'kaksonen',phone:'04033002',missed_calls:5},{fname:'jukka', lname:'kouhia',phone:'04033102',missed_calls:2}]))