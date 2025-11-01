let score ="33"; //string
console.log(typeof score);//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//Nan = not a number ,here we check what kind a number in this variable stored
// we use score = null //value assign 0
// score = undefined // Nan
//score = true//1 ,false//0
//score ="harshita"== Nan
//"33" =>33
//"33abc" =>NaN

let isloggedIn =1;
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);//true

//1 =>true
//0 =>false
//"" =>false
//"harshita" =>true
 
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);//33
console.log(typeof stringNumber);//string

// **************************** OPERATIONS*******************************

let value =3;
let negvalue = -value;
console.log(negvalue);  //-3

/*
console.log(2+2); //addition
console.log(2-2); //subtraction
console.log(2*2); //multiplication
console.log(2/2); //division
console.log(2%2); //modulus
console.log(2**2); //power
*/

let str1 = "hello";
let str2 = "  harshita";
let str3 = str1 + str2;
console.log(str3); // hello harshita

console.log("1" +2); 
//JS converts 2 → "2"
// Then concatenates: "1" + "2" = "12"

console.log(1 +"2");
//1 + "2"
//"1" + "2"
//"12"
//string
console.log("1"+2+2);
console.log(1+2+"2");

console.log( (3+4) *5 % 3);

console.log(true);//true
console.log(+true); //1













