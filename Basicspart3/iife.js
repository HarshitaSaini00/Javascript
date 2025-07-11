// Immediately Invoked Function Expressions(IIFE)

(function one(){
    console.log(`DB CONNECTED`); // named iife
    
})(); // the last () brackets are the function call

// global scope ke pollution se dikkat hoti hai kayi baar to uss global scope ke variables ya declaration to us pollution ko hatane ke liye IIFE ka use kiya

( () =>{
    console.log((`DB CONNECTED TWO`)); // unnamed iife
    
})(); // this (;) is the terminator that used to end iife

( (name) =>{
    console.log((`DB CONNECTED TWO ${name}`)); // parametre iife
    
})('harshita');