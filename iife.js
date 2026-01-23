// immediately invoked function expression (iife)

(function chai (){
    console.log (`db connected`);
})();

(()=>{
    console.log(`db coneected two `)
})();

((name)=>{
    console.log(`db coneected two ${name}`);
})('maut ke rani');