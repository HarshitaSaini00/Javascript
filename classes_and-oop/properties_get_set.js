function user (email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password =value;
        }
    })
}

const chai = new user("chai@chai.com","chai")
console.log(chai.password);
