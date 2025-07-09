//singleton -- when we use literals then no singleton is created but we use constructors then singleton created
//object.create

//object literals

const sym = Symbol("key1");
const user ={
    name:"harshita",
    "full name":"harshita saini",//there is no chance to acces this with dot syntax
    [sym]:"key1", //syntax of symbol using
    age:21,
    location:"delhi",
    email:"harshitasaini283@gmail.com",
    isLoggedIn:false
}
console.log(user.email);//first way of accessing the object
console.log(user["email"]); //second way
console.log(user["full name"]);
console.log(user[sym]); //access of symbol is using [] these brackets otherwise there is no option
// value of symbol is not changed but the type is change

user.name ="harsh"; //changing the value of object name
Object.freeze(user); // after that there is no change in the object 

user.greeting = function(){
    console.log("hello user");
    
}
user.greetingtwo =function(){
    console.log(`hello user ${name}`);
    
}
console.log(user.greetingtwo());

