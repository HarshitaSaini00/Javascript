// for each loop is used to access the array elements

const coding = ["js","ruby","java","python","cpp"];

coding.forEach(  function (item){
    console.log(item);
    // output -- js ruby java python cpp
})

coding.forEach( (item) => {
    console.log(item);
    // output -- js ruby java python cpp
})

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe);
// output -- js ruby java python cpp

coding.forEach((item ,index,arr) => {
    console.log(item,index,arr);
    // it gives the item and index of the element and complete array
})

const myCoding =[  // array ke andar object hai
    {
       languageName :"javascript",
       languageFileName :"js" 
    },
    {
       languageName :"java",
       languageFileName :"java" 
    },
    {
       languageName :"python",
       languageFileName :"py" 
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
    // output --javascript java python
})