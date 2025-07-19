const promiseOne = new Promise (function(resolve,reject){
    // Do an async task
    // DB calls, cryptography , network
    setTimeout(function (){
        console.log('Async task is compelete');
        resolve();

        
    },1000)
});

promiseOne.then(function(){
    console.log('promise consumed');
    
});
// another way of creating promise
new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('async task is 2');
        resolve();
        
    },1000)
}).then(function(){
    console.log('async 2 resolved');
    
});
// how to pass the data
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"chai",email:"chai2example.com"})
    },1000);
})
promiseThree.then(function(user){
    console.log(user);
    
})
// reject
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"harshita",password:"123"})
        }
        else{
            reject('ERROR:something went wrong')
        }
    },1000)
});
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
    
}).then((username) =>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promise is either resolve or rejected")
);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"harshita",password:"123"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});
// promiseFive.then

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}
consumePromiseFive();

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        

        
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users')

//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
        
        
//     }
// }
// getAllUsers()

fetch('https://api.github.com/uses')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) =>{
    console.log(error);
    
})
