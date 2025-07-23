class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const harshita = new user("harshita")
//console.log(harshita.createId());

class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email

    }
}
const iphone = new Teacher ("iphone","iphone@gmail.com")
console.log(iphone.createId());
