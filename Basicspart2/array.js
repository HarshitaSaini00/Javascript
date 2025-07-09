const arr =[0,1,2,3,4,5];
console.log(arr[1]);//access the element of array using indexing

//  METHODS 
arr.push(7);  // simply add the element in the array
console.log(arr);
arr.pop();  //removes the last value from the array
console.log(arr);

arr.unshift(9); // adds the value in the starting of the array
arr.shift(); // removes the value from the starting of the array

arr.includes(7); // it checks the passing argument that in the array or not gives true or false
arr.indexOf(5);//gives the index of the element if it is exists in the array otherwise gives -1

const newArr = arr.join(); // this function converts the array into the string
console.log(arr); //[0,1,2,3,4,5]
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); //string

console.log("A",arr);
const arr1 =arr.slice(1,3);

console.log(arr1);
console.log("B",arr);

const arr2 = arr.splice(1,3);
console.log(arr1);
console.log(arr2);

//**************************** ARRAYS PART 2 *********************

const marvel_heros =["thor","ironman","spiderman"];
const dc_heros =["superman","flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros); // combining two arrays in one
console.log(allHeros);

const all_new_heros =[...marvel_heros , ...dc_heros];
console.log(all_new_heros);

const array =[1,2,3,4,[3,5,2,6],6,7[3,7,1,7,9,0],0,3,6,2,7,2,5,];
const mewArray =array.flat(Infinity); // flat returns the single array and infinity is the depth of the array 
console.log(mewArray);
//{ 1,2,3,4,3,5,2,6,6,7,3,7,1,7,9,0,0,3,6,2,7,2,5}

console.log(array.isArray("harshita")); //checks this is an array or not
console.log(array.from("harshita")); //converts the string into the array
console.log(array.from({name:"harshita"})); //it gives the empty array because it could not identify the what to change


let s1 = 300;
let s2 =500;
let s3 =200;
console.log(Array.of(s1,s2,s3)); //[300,500,200]



