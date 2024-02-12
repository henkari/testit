function newTest(list){
listname=list.map(item=>{
    name=item.name
    return name
})
return listname
}

console.log(newTest([{'number':1, 'name':'jukka'},{'number':2, 'name':'matti'}]))