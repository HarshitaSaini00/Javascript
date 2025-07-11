var c =300;
if(true){
    let a =10;
    const b=20;
    var c=30;
}
console.log(a);// not give anything
console.log(b); // same not giv anything
console.log(c); // but here output is 30 

//{} ---> these brackets are called the block scope and the value is in the block scope not going outside from it
// and without block scope the variables in the global scope

for(let i=0;i<Array.length;i++){
    const element =array[i];
}
function one(){
    const username ="harshita";

    function two(){
        const website ="youtube";
        console.log(username);
        
    }
    console.log(website); // here it gives the error becasue we access this function outside the block
    two(); // output -- username
    
}
one(); // this function is never be called

if(true){
    const username ="harshita";
    if(username =="harshita"){
        const website ="youtube";
        console.log(username + website); //output -- harshita youtube
        
    }
    console.log(website); // error outside calling from the block
    
}
console.log(username); // error outside from the block

addone(3) ; // if calling the function before decalartation that is totally okay in this syntax

function addone(num){
    return num+1;
}

addone(5); // if we calling here that is totally agree



addtwo(8); // but in the second way of function represting we don't call the function before decalartation it gives error

const addtwo =function(num){ // this is the syntax that we storing the function in the varibale
    return num+1;
}
addtwo(7); // thst is totally fine

