function ilv (){
    console.log("14344")
}

ilv() 

function add2num(num1,num2){
   console.log(num1+num2)
}
add2num(3,4)

function add3num(num3,num4){
    let result = num3+num4
    console.log("raj")
    return result
}
 const result = add3num(3,10)
 console.log("result: ",result);

function login(username){
   if(!username){
    console.log("please enter a username");
    return
   }
   return` ${username} just logged in`
}
//console.log(login("prathamesh"))
console.log(login(""))

// rest operator 

function rest(...num1){
 return num1
}

console.log(rest(200,400,500))//// do val1 and val2


/// habdelobject 

const user = {
    username: "rani",
    price:19999
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handelobject(user)


const array= [200,300,400,500]
function ptb(getarray) {
    return getarray[1]
}
console.log(ptb(array))