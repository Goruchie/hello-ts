let boca: number = 11;
let river: number = 11;
let meshi: number = 1;
let juegaMeshi: boolean = false;

function play(equipo1: number, equipo2: number): void
{
    let motivo: string = '';
    if(juegaMeshi)
    {
        equipo1 += meshi;
        motivo = ' because meshi played for Boca';
    }
    if(equipo1 > equipo2) console.log(`Boca won${motivo}`);
    
    if(equipo1 == equipo2) console.log("Tied");
    
    if(equipo1 < equipo2) console.log("River won");
    
}

play(boca, river);

//Arrays playground

let array = [1, 2, 3, 4, 5];
let arrayTs: number[] = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(arrayTs);

//Objects playground

let person = {
    name: "Gustav",
    age: 21,
    eatsMeat: true
}
// console.log(person);

person = {
    name: "Gerson",
    age: 101,
    eatsMeat: true
}
// console.log(person);

// Types playground

// Declaring a Type
type PersonType = {
    name: string,
    age: number,
    isVegan?: boolean
}

// Declaring a object based in the type
let personType: PersonType = {
    name: "Robert",
    age: 50,
    isVegan: false
}
let personType2: PersonType = {
    name: "Stewie",
    age: 2,
}
// console.log(personType, personType2);

// Interface playground

interface PersonI {
    name: string,
    age: number,
    isVegan?: boolean
}

let personI: PersonI = {
    name: "Robert",
    age: 50,
    isVegan: false
}
let personI2: PersonI = {
    name: "Stewie",
    age: 2,
}

function personName(person: PersonI) {
    console.log(`The person name is ${person.name}`)
}
personName(personI);

// OOP
class Persona {
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
    name?: string;
    age?: number;
  }
  
  const persona = new Persona("Marcos");
  console.log(persona); 
   
// Encapsulation

class Lottery<T> {
    private ticket?: T;
    constructor(private name: string){}
    
    setTicket(ticket: T){
        this.ticket = ticket;
    }
    getTicket(){
        return this.ticket;
    }
    public raffle(): string{
        return `The person called ${this.name}, has the ${this.ticket} ticket.`;
    }
}

let lottery: Lottery<number> = new Lottery("Olaf");
lottery.setTicket(8);
console.log(lottery.raffle());