// console.log("text");

// lvl 1_1

function intro() {
    console.log("Hello World1");
}

intro();

// arrow function mit geschweiften Klammern

intro = () => {
    console.log("Hello World2");
}
intro();


// Wenn die Funktion nur ein einziges Statement hat und das Statement einen Wert zurückgibt, 
// können die Klammern entfernen werden.

intro = () => console.log("Hello World3");
intro();

// Schreibweisen

// const add = (a, b) => (a + b)
// console.log(add(1, 2));
const add = (a, b) => a + b;
console.log(add(1, 2));


// -------------------lev1_2---------------------------------------------
// ##############################################################################

// Schreibe eine Funktion, die "Hallo" in deinem Browser (console oder HTML) anzeigt. 

// function hallo() {
//     console.log("Hallo");
// }
// hallo();

// konvertiert:



// ##############################################################################



// ##############################################################################

// Schreibe eine Funktion, die die Summe von zwei Zahlen in deinem Browser (console oder HTML)  anzeigt.  (x=2; y=3)

// function summe(x, y) {
//     console.log(c + d);
// }
// summe(2, 3);

// konvertiert:

const summe = (x, y) => {
    console.log(x + y);
}
summe(4, 6);

// weitere Schreibweise
// const summe = (x, y) => (x + y);

// summe(console.log((4, 6)));

// ##############################################################################



// ##############################################################################
// Schreibe eine Funktion, die die Multiplikation von zwei Zahlen als Alert ausgibt. (x=2; y=3)

// function multiply(x, y) {
//     alert(x * y);
// }
// multiply(2, 4);

// konvertiert:

const multiply = (c, d) => {
    alert(c * d)
}
// multiply(2, 4);
// ________________________________________________________________
// andere Schreibweise
// const multiply = (c, d) => alert(c * d)

// multiply(2, 4);
// ________________________________________________________________

// ##############################################################################




// ##############################################################################

// // Schreibe eine Funktion, die einen Parameter nimmt und 
// den Typ dieses Elements in deinem Browser (console oder HTML) anzeigt. 
// Teste: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]

// function test(i, j, k, l, a) {

//     console.log(typeof i, j, k, l, a)
// }
// test(true, "hi", 1, { name: "John" }, [0, 1]);



// konvertiert:

test = (i, j, k, l, a) => {
    console.log(typeof i, j, k, l, a);
}
test(true, "hi", 1, { name: "John" }, [0, 1]);

// ##############################################################################


// -----------------lev 1_4

// Deklariere die Funktion hero() mit drei Parametern heroName, heroPower, heroEnemy und im Funktionskörper {}

let heroName;
let heroPower;
let heroEnemy;


let hero = (heroName, heroPower, heroEnemy) => {
    console.log(`Mein Lieblingsheld aus Marvel ist:
${heroName}.Er/Sie hat die Fähigkeit: ${heroPower}. Sein/Ihr größter Gegener ist: ${heroEnemy}.`);
}
hero('spiderman', 'enahnced senses', 'Sandman');

// ##############################################################################


// ##############################################################################

// -----------------lev 1_6

let x = 1;
let y = 2;

const returnOne = () => {

    return 1;
    if (x === y) {
        console.log(`Wird etwas gedruckt?`);
    }

}
returnOne();

// let x = 1;
// let y;

// const returnOne = () => {

//     return 1;
//     if (x === y) {
//         console.log(`Wird etwas gedruckt?`);
//     }

// }
// returnOne(1,1);


// ##############################################################################

// ##############################################################################

// -----------------lev 1_7


let q;
const returnTwo = (q) => {
    return console.log(q * 2);
}
returnTwo(20);

// let q = 1;
// let result = q * 2;

// const returnTwo = (p) => {

//     return console.log(result = p * 2);
// }
// returnTwo(200);
// ##############################################################################


// ##############################################################################

// -----------------lev 1_8
let thisYear = 2022;

const yearBorn = (date) => {

    return console.log(thisYear - date);

}
yearBorn(1921);

// ##############################################################################

// ##############################################################################

// -----------------lev 1_9
// Mein Name ist Baschar Shaheen. 
// Ich bin in Syrien geboren. 
// Ich lerne Coden bei SuperCode.
// Ich bin 34 Jahre alt. 
// Ich wohne in Düsseldorf.

let firstName = 'Cipi';
let lastName = 'Vlad';
let gebOrt = 'Copsa Mica';
let alter = 38;
let city = 'Tübingen';

const curVitae = (firstName, lastName, gebOrt, alter, city) => {

}

curVitae();



// ##############################################################################
