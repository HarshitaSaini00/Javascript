// while

/* Syntax of while loop
while (condition) {
    
}
*/

let i =0;
while (i <=10) {
    console.log(`value of index is ${i}`);
    i++;
}

let myarray = ['flash','batman','superman'];
let arr =0;
while(arr<myarray.length){
    console.log(`value is${myarray[arr]}`);
    arr = arr+1;
}

let score = 1;
do{
    console.log(`score is ${score}`);
    score++
    
}while (score <=10);
