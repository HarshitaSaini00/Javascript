const userEmail =[];
if(useremail){
    console.log("got user email");
    
}else{
    console.log("don't have the user email");
    
}

//falsy values -- false ,0,-0,bigint 0n,"",null, undefined ,NaN

//truthy values --true ,1,"0"(value inside the string is truthy),[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty");
    // output -- array is empty
}

const emptyobj ={}
if(Object.keys(emptyobj).length ===0){
    console.log("object is empty");
    
}

/* 
false == 0 -->true
false =='' -->true
0==''-->true
*/

// nullish coalescing operator(??):null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20; //10

console.log(val1);

//ternary operator 
// condition ? true :false;

const iceTeaPrice =100;
iceTeaPrice >=80 ?console.log("less than 80") :console.log("more than 80");
// more than 80


