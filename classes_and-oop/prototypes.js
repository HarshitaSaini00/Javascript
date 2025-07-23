// let myName ="harshita";
// let myChannel ="chai";

//console.log(myName.trueLenght);

let myHeros = ["thor","spiderman"];

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower :function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.harshita =function(){
    console.log(`harshita is present in all objects`);
    
}

Array.prototype.heyHarshita = function(){
    console.log(`harshita says hello`);
    
}
heroPower.harshita()
myHeros.harshita()
myHeros.heyHarshita();


// inheritance

const user ={
    name:"chai",
    email:chai@google.com;
}

const teacher ={
    makeVideo :true
}
const TeachingSupport ={
    isAvailable :false
}

const TASupport ={
    makeAssignment:'JS assignment',
    fullTime :true,
    __proto__:TeachingSupport
}

//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername ="chaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`true lengTH is :${this.trim().length}`);
    
    
}
anotherUsername.trueLength();
"harshita".trueLength();
"iceTea".trueLength();