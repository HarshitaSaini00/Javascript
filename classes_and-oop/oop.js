const user ={
    username :"harshita",
    loginCount :8,
    signedIn:true,

    getUserDetails:function(){
        //console.log("got user details from database");
        //console.log(`username:${this.username}`);
        // console.log(this); // it gives the compelete object
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //gives empty object {}

function user(username,loginCount,isLoggedIn){
    this.username =username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}

const userOne = new user("harshita",12,true);
const userTwo = new user("harsh",16,false);

console.log(userOne);
console.log(userTwo);

// STEP 1--- new object is created 
// STEP 2---constructor function is called due to new keyword and this packs the arguments and return
// STEP 3---arguments are injected in the this keyword
// STEP 4---found in the functions



