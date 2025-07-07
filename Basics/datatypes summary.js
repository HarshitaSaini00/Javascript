// Primitive
// 7 types : string ,number,boolean,null,undefined,symbol,bigint

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = symbol('123');
const anotherid =symbol('123');
console.log(id===anotherid); //false

// Reference - non primitive
// Array ,objects, functions

const heros =["shaktiman","naagraj","doga"]; //arrays
let myobj ={         //objects
    name:"harshita",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}
// typeof = for checking the datatype of the variable
// typeof(null) = object
//typeof(function) = function

//********************** MEMORY******************* 
// stack use in (primitive) data types
// heap use in (non primitvie) data types
