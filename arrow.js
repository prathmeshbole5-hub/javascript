const user ={
    username:"rani",
    price: 999,

    kk: function(){
        console.log(`${this.username}),welcome to website`);
    }
}

user.kk()
user.username ="sam"
user.kk()