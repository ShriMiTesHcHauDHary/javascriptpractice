//variacle
//let
let al = 10
al = 20
console.log(al);

//const :- if initailizated have to be declared if declared can't  be re declared 
const ac = 100
console.log(ac);

//data types and coversion
let classesc = {
    name : "mitesh",
    class : "mca",
    age : 22
}

console.log(Number(classesc.class));

//ternary operator : can onlu access the value of already declared
let num = 10
let tp = num % 2 === 0 ? "is even " : "is odd"
console.log(tp);

//boolean 
let value = 10
function truefalse(value){
    if(Boolean(value) === false) {
        console.log("value is cannot be null,undefined,0,empty string,Nan");
    }else if(Boolean(value)){
        console.log("value is ture")
    }
}

let db = truefalse()
console.log(db);

//loops
let fe = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ; i < fe.length; i++){
    if (fe[i] % 2 ===0){
         console.log("is even" + fe[i] + i)
    }else(
        console.log("is odd" + fe[i] )
    )
}


//while loop
 let i = 0
// while(i<fe.length){
//     let a = fe[i] % 2 === 0 ? "is even" + fe[i] : "is odd" + fe[i]
//     console.log(a);

//     ++i
// }

//do while
do{
    if(i<fe.length){
let a = fe[i] % 2 ===0 ? "is even" + fe[i] : "is odd" + fe[i]
console.log(a);
    }

    ++i
}while(i<fe.length)


//for of

function* generator(){
    yield 'm'
    yield 'i'
    yield 't'
    yield 'e'
    yield 's'
    yield 'h'
}
for(let word of generator()){
    let a = word.toString().split()
     console.log(a);
}

//function

function isprime(z){
    if(z<=1)
    return "not prime"

    for(let i = 2;i<z;i++){
        if(z%i===0){
            return z + "not prime"
        }
    }
        return z + "is prime"
    
}
let fisprime = isprime(17)
console.log(fisprime);


let arfunction = (uu) =>{
    let value = uu.toString().substring(0,3);
    let random = parseInt(Math.random()*1000);
    return "@#$$%" + value + random
}

const d = arfunction("mitesh")
console.log(d);

//function return and console
function bb(){
    // console.log("console");
    return "console"
    
}
bb()
// let g = bb();
// console.log(g);