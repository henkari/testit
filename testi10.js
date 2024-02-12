/*
Tee funktio, joka kasvattaa missed calls kenttää yhdellä, kun yhteystiedon id annetaan parametrina. 
Funktio palauttaa uuden puhelinluettelon. Alkuperäisiin olioihin ei saa tehdä muutoksia.
Testaa funktion toiminta.
Vinkki 1: map
Vinkki 2: {…contact}
/***/

let nextId = 0;

function addingMissedCalls(id, array) {
    return array.map(obj => {
        let objectWithId = { ...obj, id: nextId };
        nextId++;

        if (objectWithId.id === id) {
            let missed_calls = (objectWithId.missed_calls || 0) + 1;
            return { ...objectWithId, missed_calls: missed_calls };
        }

        return objectWithId;
    });
}

    


const updatedArray = addingMissedCalls(
    2,
    [{ fname: 'henri', lname: 'kaksonen', phone: '00077766' },
    { fname: 'jukka', lname: 'horttanainen', phone: '007766' },
    { fname: 'cccc', lname: 'ccccc', phone: '77777' },
    { fname: 'hooo', lname: 'kikiki', phone: '' },
    { fname: 'hohho', lname: 'kkölöö', phone: '101010' }]
);

console.log(updatedArray);
