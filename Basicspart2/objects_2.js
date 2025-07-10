// const tinderuser = new object{} -- singleton object
const tinderUser ={}; // not a singletone object
tinderUser.id ="123";
tinderUser.name = "harshita";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser ={
    email:"harshitasaini283gmail.com",
    fullname:{
        userfullname:{
            firstname:"harshita",
            lastname:"saini"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};
const obj3 =Object.assign({},obj1,obj2); // syntax of merging the objects

const obj4 ={...obj1,...obj2}
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it gives all the keys of the object in the array form
console.log(Object.values(tinderUser)); // it gives all the values of the object in the form of array
console.log(Object.entries(tinderUser)); // it gives the key value pair separately in the array format of each pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it checks the property that we pass in the argument checks this property exists or not in the object 
//gives the result in the true or false




