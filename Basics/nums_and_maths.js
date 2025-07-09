const score = 400;
console.log(score); //it gives only 400

const balance = new Number(100.0);
console.log(balance); // [Number:100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); // 100.00 -- it gives two digit after point in float after 
//using tofixed

const othernumber = 23.89;
console.log(othernumber.toPrecision(3));//23.9 it gives precise value of that value  we passed in the arguement

const num =100000;
console.log(num.toLocaleString('en-IN')); // 'en-IN' -- used for indian math system
// tolocalstring adds the comma between digits using indian math system


//********************* MATHS *********************** 

console.log(Math); // object[math]{} --output
//math is a object

console.log(Math.abs(-4)); // it gives absolute value of any negative number 
//output --> 4 it converts negative number to postive number only
console.log(Math.round(4.3)); // this function rounds off the decimal number
// output --> 4
console.log(Math.ceil(4.5)); // it takes the higher value 
//output -->5
console.log(Math.floor(4.9)); // it takes the lower value
//output -->4
console.log(Math.min(4,3,6,9,8,5,1,0)); // it gives the minimum value
//output -->0
console.log(Math.max(6,9,8,6,2,4,6,5)); //it gives the maximum value
//output -->9

console.log(Math.random());//it gives random value between 0 and 1
console.log(Math.random()*10 +1); // random value multiplies with 10 so it shifts from one digit and start from 1 so we add 1
console.log(Math.floor(Math.random()*10+1));//it gives the lower value like eg- 4,2,5,random values

const min =10;
const max =20;
console.log(Math.floor(Math.random* (max-min+1)+min));// we defined the range and minimum value





