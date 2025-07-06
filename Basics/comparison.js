console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); //true 
console.log("02">1); // make sure comparison between two operands will be same data type
// true ,and this output is predicatble

console.log(null>0); //false
console.log(null ==0); //false
console.log(null >=0); //true
// here null is treatiing as 0 there for null>=0 gives true otherwise gives false

console.log(undefined==0); //false
console.log(undefined<0); //false
console.log(undefined>0); //false

// these undefined and null comparison gives confusion always gives different output

// === check datatypes
console.log("2"===2);//false




