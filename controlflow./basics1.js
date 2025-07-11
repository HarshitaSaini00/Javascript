// if statement

if(true){
    //syntax -- when condition gets true then the if statement proceed otherwise no

}

/* COMPARISION OPERATORS
 <,>,==,<=,>=,!=,=== (this checks the value only not datatype),!==
*/

const temp =41;

if(temp>50){
    console.log("temperature is high");
    
}else{
    console.log("temperature is low");
    
}
console.log("executed");

const score =200;

if(score>100){
    const power ="fly";
    console.log(`user power:${pwer}`);
    
}
console.log(`user power:${power}`); // it gives error 
// because of the block scope , we cannot access the block variables outside the scope

const balance = 1000;

if(balance>500) console.log("test"),console.log("test2"); // this is the implicit statment 
// but in the end complusory to use (;) this 
// but this is not the good practice

if(balance <500){
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}
else if(balance <900){
    console.log("less than 900");
    
}
else{
    console.log("greater than 900");
    
}

const userLoggedIn = true;
const debitcard = true;
if(userLoggedIn && debitcard){  // we add two conditions in one go if both conditions are true then the if statement procced
    console.log("allow to buy course");
    // if one of the condition is false then no code is running inside the if statement
}

const loggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(loggedInFromGoogle || LoggedInFromEmail){ // here we add two conditions but here if only one condition will get true the code will proceed 
    console.log("user logged in");
    
}
