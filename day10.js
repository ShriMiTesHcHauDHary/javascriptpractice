//variable
//let after decleration can be re declared or update in future
let  v = 10 
v = 9
console.log(v);
//const if initialize must be declared once declared can't be re assign
const v2 = 100
console.log(v2);

if(Number(v)){
    console.log("variable is number " + v);
}
//data types
//premitives:-string,number,boolean,undefined,null,bigInt,Symbole
//non-premitives:-object,array

//loops
for(let i = 0; i<=10;++i){
    console.log("this number is " + i);
}

//while loop
let w = 0
while(w<=10){
    console.log("this number is " + w);

    ++w
}

//do while loop

let d = 10
do{
    console.log("this number is " + d);

    --d
}while(d< 10 && d >0)

//for of loop
let farray=["1","2","3","4","5","6","7","8","9","10"]

for(const number of farray){
    console.log("number this time is  " + number);
}

//function 
function isprime(n){
    if(n<=1)
    console.log("not prime number " + n);

    for(let i =2;i<n;++i){
        if(n%i === 0){
            return console.log("number is not prime " + n);
        }else{
            return console.log("number is prime " + n);
        }
     
    }
}

isprime(3);

//arrow function 

let createrandompassowrd = (uniquekey) =>{

    let value = (String(uniquekey)).substring(0,3);
    let random = Math.floor(Math.random()*value.length);
    let specialcharater = "@#%^$#" 
    return value + random + specialcharater;

}
let a =  createrandompassowrd("mitesh")
console.log(a);

