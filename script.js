"use strict";
let boca = 11;
let river = 11;
let meshi = 1;
let juegaMeshi = false;
function play(equipo1, equipo2) {
    let motivo = '';
    if (juegaMeshi) {
        equipo1 += meshi;
        motivo = ' because meshi played for Boca';
    }
    if (equipo1 > equipo2)
        console.log(`Boca won${motivo}`);
    if (equipo1 == equipo2)
        console.log("Tied");
    if (equipo1 < equipo2)
        console.log("River won");
}
play(boca, river);
//Arrays playground
let array = [1, 2, 3, 4, 5];
let arrayTs = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(arrayTs);
//Objects playground
let person = {
    name: "Gustav",
    age: 21,
    eatsMeat: true
};
// console.log(person);
person = {
    name: "Gerson",
    age: 101,
    eatsMeat: true
};
// Declaring a object based in the type
let personType = {
    name: "Robert",
    age: 50,
    isVegan: false
};
let personType2 = {
    name: "Stewie",
    age: 2,
};
console.log(personType, personType2);
