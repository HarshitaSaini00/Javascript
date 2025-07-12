const myobject ={
    js :'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myobject) {
    console.log(key); // it gives all the key in the object
    console.log(myobject[key]); // it gives all the values in the object
    console.log(`${key} shortcut is for${myobject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"];

for (const key in programming) {
   console.log(key); // it gives the keys but in different from
   // output -- 0,1,2,3,4
   console.log(programming[key]);
   //output -- js rb py java cpp
}

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"UNITED STATES OF AMERICA");

for (const key in map){
    console.log(key);
    // it gives nothing because maps are not iterable
}
    
