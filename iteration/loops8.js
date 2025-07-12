const myNums =[1,2,3];

const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc ${acc}and currval ${currval}`);
    
    return acc+currval
},0)

const myTotal1 =myNums.reduce( (acc,currval) =>acc+currval,0)
console.log(myTotal1);
// both are the same thing but the syntax is different

const shopingCart = [
    {
        itemName :"js course",
        price :2999
    },
    {
        itemName :"java course",
        price :2999
    },
    {
        itemName :"python course",
        price :2999
    },
    {
        itemName :"c++ course",
        price :2999
    } 
]
const totalBill = shopingCart.reduce( (acc, item) => acc+ item.price ,0)
console.log(totalBill);
