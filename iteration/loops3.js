// for of

const arr =[1,2,3,,4,5];
for (const num of arr) {
    console.log(`num`);
} // 1 2 3 4 5

const greetings ="hello world!";
for (const greet of greetings) {
    console.log(`each char is${greet}`);
}

// maps -- known for unique values stored 
// gives in the key value pair

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"UNITED STATES OF AMERICA");
console.log(map);

for (const [key,value] of map) {
    console.log(key ,'-',value);
}

const myObject ={
    'game1': 'NFS',
    'game1':'spiderman'
}
for (const [key,value] of myobject) {
    console.log(key,'-',value); // error -- object is not iterable
}
