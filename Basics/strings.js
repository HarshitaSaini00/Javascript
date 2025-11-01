const name ="harshita";
const age =21;
//console.log(name+age+"value"); outdated syntax

console.log(`hello my name is ${name} and my age is ${age}`);

const fullname ="harshita saini";
console.log(fullname[0]);
console.log(fullname.length);
console.log(fullname.toUpperCase); // not change the orginal string because the string stored in the stack
console.log(fullname.charAt(2)); //means which character on the 2nd index
console.log(fullname.indexOf("h")); //means what is the index of this character in the string

const newstr = fullname.substring(0,4);
console.log(newstr);  // gives==hars string only because starts from 0index and end it 3 because last -1

const newstr1 = fullname.slice(-8,4); // in slice method we pass the negative values also
console.log(newstr);

const newstr2 = "   harshita   ";
console.log(newstr.trim()); // trim method cuts the extra spaces from the string

const newstr3 = "harshita";
console.log(newstr3.replace('a','h')); //replace(what to replace , from what to replace)
console.log(newstr3.includes('harsh')); // gives true or false if exist or not

