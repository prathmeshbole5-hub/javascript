// singleton
// create object 
// object litearls

const mysym = Symbol("key1")

const Jsuser ={
    name : "prathmesh",
    [mysym] :"myKey1",
    age :18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","saturaday"]
}

console.log(Jsuser.email)
//console.log(Jsuser.["email"])
//console.log(Jsuser.["full name"])
//console.log(Jsuser[mySym])

Jsuser.email = "ptb@gpt.com"
Object.freeze(Jsuser)
Jsuser.email ="iuigierfhhjbjf"
console.log(Jsuser);

Jsuser.y = function(){
    console.log('hellojs user')
}
Jsuser.z = function(){
    console.log(`hello Js user,${this.name}`)
}



console.log(Jsuser.y());
console.log(Jsuser.z());
