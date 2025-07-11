const user ={
    username:"harshita",
    price:999,

    welcomeMessage :function(){
        console.log(`${this.username}, welcome to website`) 
        // this keyword is used for current context
    }
}
user.welcomeMessage() // harshita, welcome to website
user.username="sam";
user.welcomeMessage() //same, welcome to website 

// this keyword takes the current context of the username if don't use this keyword here so
// again and again after chaning the username we will see the (harshita,welcome to website)


// global object is window

console.log(this); //{} -- empty object

function one(){
    let username ="harshita";
    console.log(this.username); //it gives the error because the this keyword is not used in the function
}
one()

const one2 =function(){
    let username ="harshita";
    console.log(this.username); // output -- undefined becasue this syntax of function is not used the this keyword
    
}
one()
const one3 =() =>{  // this is the syntax of arrow function
    let username ="harshita";
    console.log(this.username); // output -- {} empty object becuase the arrow function is also not used this keyword
    
}
one()

const addition =(num1,num2) =>{ // explict function
    return num1+num2; // always pass the return statment

}

const addition1=(num1,num2)=>num1+num2; // implicit function
// if we don't use {} these brackets then we don't need to pass return statement

const add2 =(num1,num2) =>(num1,num2)

const add3 =(num1,num2) =>({username:"harshita"}) // object is passing in thr arrow function like this

console.log(addition1(4,5));

