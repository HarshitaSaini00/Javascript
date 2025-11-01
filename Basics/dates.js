let myDate = new Date();
console.log(myDate.toString()); // toString() poori date ko readable full format me convert karta hai (date + time + timezone).
//Fri Oct 10 2025 15:45:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sirf date part return karta hai (time or timezone nahi).
//Fri Oct 10 2025
console.log(myDate.toLocaleString());//Date ko local format me dikhata hai (user ke location & system settings ke hisaab se).
//10/10/2025, 3:45:30 PM

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




