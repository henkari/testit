function number(numero){
   // Funktio tarkistaa puhelinnumeron muodon käyttäen regexiä.
  //let regex = /^[-+]?(\d{3}[\s]){2}\d{3}$/; (). [-+]? allows for an optional plus (+) or minus (-) sign at the beginning

    // Jos puhelinnumeroa ei ole annettu, palautetaan tyhjä merkkijono
    if (numero === undefined || numero === "") {
      return "";
    }
  
    // Regex-lauseke, joka määrittää puhelinnumeron sallitun muodon
    const phoneRegex = /^\+?[0-9\s-]{3,20}$/;
    // Tarkistetaan vastaako annettu numero regexiä
    if (!phoneRegex.test(numero)) {
      // Jos ei vastaa, heitetään virhe
      throw new Error('Invalid phone number format');
    }
    // Poistetaan puhelinnumerosta kaikki muut merkit paitsi numerot ja plus-merkki
    return numero.replace(/[^\d+]/g, '');
  }
  
   
module.exports=number;
//console.log(number('123'))