let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// these are the methods of date that gives the date in different ways
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023 ,0,23); // arguments passed -- year month day
console.log( myCreatedDate.toDateString()); // output -- mon jan 23 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//it gives the present date in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());//it gives the month
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
})




