const x = new Object()
 
console.log(x);
x.id="123abc"
x.name= "sammay"
x.isloggedin=false

console.log(x);

const y ={
    email: "thaur@gmail.com",
    fullname: {
        userfullname:  {
            firstname : "prathmesh",
            lastname: "BOLE"
        }

    }
}

console.log(y)
console.log(y.lastname);

const obj1= {1:"a",2: "b"}
const obj2= {3:"a",4: "b"}

const obj3= Object.assign({},obj1,obj2)