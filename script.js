//alert('Täällä ollaan');
/*Näin
laitetaan
monta
kommenttia
*/
console.log('Täällä ollaan');

//Muuttujat: var let tai const

let ika = 16;
ika = ika + 1;

console.log(ika);

const pii=3.14;
console.log('Piin likiarvo: ' + pii);

const etunimi='Janne'; //string
const sukunimi='Jantti'; //string
const syntymavuosi=2004; //integer, eli kokonaisluku
const lahtelainen=true; //boolean
let maarittelematon; //undefined

console.log("syntymävuoden tyyppi: " + typeof syntymavuosi);
console.log("nimen tyyppi: " + typeof etunimi);
console.log("lahtelaisuuden tyyppi: " + typeof lahtelainen)

//template string
console.log('Nimeni on ' + etunimi + ' ' + sukunimi + ' ' + 'ja syntymavuoteni on ' +syntymavuosi);

const henkilotieto= `Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`;

console.log(henkilotieto);

console.log(`henkilotiedon pituus on: ${henkilotieto.length}`);

console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0, 9).toUpperCase());

console.log(henkilotieto.split(' ')[2]);

console.log(henkilotieto.split(' '));

//alku
const autoja = ['Hyundai', 'Toyota', 'Volvo'];

autoja[3]='BMW';

autoja.push('Saab');

autoja.unshift('Mersu');

autoja.pop();

console.log(autoja);
//loppu

//alku
const opiskelija = {
  id: 1,
  etunimi: 'Janne',
  sukunimi: 'Jantti',
  syntymavuosi: 2004,
  koulutus: ['insinööri', 'maisteri', 'opettajan pätevyys'],
  osoite: {
    katu: 'Ståhlberginkatu 8C',
    postinumero: 15500,
    kunta: 'Lahti'
  }
}

console.log(opiskelija.etunimi);
//loppu

//alku
const laksyt = [
  {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
  },
  {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
  },
  {
    id: 3,
    tehtava: 'Ohjelmointi, JavaScript',
    tehty: false
  }
];

for(let i=0; i <= 10; i++){
  console.log(`For loopin iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`While loopin iteraatioluku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}





