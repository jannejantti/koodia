//muuttujat
const nimi = 'Janne Jantti'; //string
const ika = 16; //integer, eli kokonaisluku
const onkoopiskelija = true; //boolean

console.log(nimi);
console.log(ika);
console.log('Onko opiskelija:' + ' ' +  onkoopiskelija);
//muuttujat loppuu

//ehtolause
const opiskelija = onkoopiskelija ===  true ? 'opiskelija' : 'ammattilainen';
console.log(opiskelija);
//ehtolause loppuu

//heisivuillenisurffaaja
const surffaaja= `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ika}-vuotias ${opiskelija}`;
console.log(surffaaja);
//loppuu

//array
var henkilo1 = "1.ystäväni: Timo Nieminen";
var henkilo2 = "2.ystäväni: Matti Korhonen";
var henkilo3 = "3.ystäväni: Kari Koskinen";
var henkilo4 = "4.ystäväni: Seppo Nieminen";
console.log(henkilo1, henkilo2, henkilo3, henkilo4);
console.log(henkilo1.split(' '));
console.log(henkilo2.split(' '));
console.log(henkilo3.split(' '));
console.log(henkilo4.split(' '));
//array loppuu

//javascript objekti alkaa
const perhe = [
  {
    id: 1,
    etunimi: 'Kai',
    ika: 42,
    taysiikainen: true
  },
  {
    id: 2,
    etunimi: 'Virpi',
    ika: 40,
    taysiikainen: true
  },
  {
    id: 3,
    etunimi: 'Suvi',
    ika: 21,
    taysiikainen: true
  },
  {
    id: 4,
    etunimi: 'Saku',
    ika: 18,
    taysiikainen: true
  },
  {
    id: 5,
    etunimi: 'Janne',
    ika: 16,
    taysiikainen: false
  }];
console.log(perhe);
//javascript objekti loppuu

//mappaus
const perhe1Mappaus = perhe.map(function(perhe1){
  return perhe1;
});
console.log(perhe1Mappaus);
//mappaus loppuu

//taysiikaiset
const perhe2Filter = perhe.filter(function(perhe2){
  return perhe2.taysiikainen === true;
});
console.log(perhe2Filter);
//taysiikaiset loppuu

//alaikaiset
const perhe3Filter = perhe.filter(function(perhe3){
  return perhe3.taysiikainen === false;
});
console.log(perhe3Filter);
//alaikaiset loppuu

//funktionkutsu
function kaikkiiat(ekaNumero, tokaNumero, kolmasNumero, neljäsNumero){
  return ekaNumero+ tokaNumero+ kolmasNumero + neljäsNumero;
}
console.log (kaikkiiat(42, 40, 21, 18));
//funktionkutsu loppuu