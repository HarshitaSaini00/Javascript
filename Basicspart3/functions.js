function addTwoNumbers(num1,num2){ // the values we pass in the function are called parameters
    console.log(num1+num2);
    
}
// addTwoNumbers -- just right that so it's a reference we are not calling the function
//calling the function
addTwoNumbers(5,6); // these values pass at the time of fucntion calling is arguments

result = addTwoNumbers(5,6);
console.log(result);
//output--- it gives undefined value becuase the function is not return any kind of value

function addTwoNumbers(num1,num2){
    return(num1+num2); // used return keyword then this function returns a value that we stored in the 3rd variable
    
}
result = addTwoNumbers(3,6); // now it gives the value 9
console.log(result);

function loginUserMessage(username){
    return`${username} just logged in`;
}
console.log(loginUserMessage("harshita")); 
// after used of return statement we print the value of the function alse using console.log

function calculatorCartPrice(...number1){ // --- (...)these 3 dots are rest here (left of the things goes in the number1)
    return number1;
}
console.log(calculatorCartPrice(200,4000,2456,3958));
//output --- [200,4000,2456,3958] gives the array format
//(...)-- these dots in the array we used is for spread

function calculatorCart(val1,val2,...num){ // val1 =400 ,val2 =500 ,and rest of the things goes to the num
    return num;
}
console.log(calculatorCart(400,500,2700,6500));

const user ={
    username:"harshita",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user);
handleObject({
    username:"sam",
    price:999
})

const array =[200,400,500,100];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondVlaue(array)); //400 --one way
console.log(returnSecondValue([200,400,500,600])); //400 --second way













