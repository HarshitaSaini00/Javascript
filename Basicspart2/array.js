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