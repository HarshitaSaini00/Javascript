// for 



/* 
syntax of for loop

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element ==5){
       // console.log("5 is the best number");
        
    }
    //console.log(element);
    
// 0 1 2 3 4 5 is the best number 6 7 8 9 10
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j= 0; j < 10; j++) {
       // console.log(`inner loop ${j}`);
       // console.log(i +'*'+j+'='+i*j);
        
        
    }
    
    
}

let array =["flash","batman","superman"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    
}

// break and continue

for (let index = 0; index <=20; index++) {
    if (index == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index <=20; index++) {
    if (index == 6){
        console.log(`detected 6`);
        continue;
    }
    console.log(`value of i is ${index}`);
}

