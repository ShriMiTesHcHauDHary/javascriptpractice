// //nested loop
// let a = 5+5
// function outer(){
//     let b =7+7
//     function inner(){
//         let c = 9+9
//         console.log(a,b,c)
//     }
//     return inner()
// }

// outer();//10,14,18
// outer();//10,14,18

//clousres

// let a = 0
function outer(){
    let b = 0
    function inner(){
        
        b++
        console.log(b);

    }
     return inner//we are returing whole function which carry some amount of live data from the first function
}
const fna = outer()
fna()//1
 fna()//1++=2


 //currying
 function add(a,b,c){
    return a+b+c
 }
function curry(fn){
 return function (a){
    return function (b){
        return function (c){
                return fn(a,b,c)
            
        }
    }
}
}

let curried = curry(add)
console.log(curried(1)(2)(3))

const add1 = curried(1)
const add2 = add1(2)
const add3 = add2(3)
console.log(add3)

//thiskeyword
//implicit
const class1 ={
    name:"mitesh",
    printmyname : function(){
  return console.log("this is my name " + `${this.name}`);
    }
}

class1.printmyname()
//explicit

      function printex(){
        return console.log("this is my name " + `${this.name}`);
    }


printex.call(class1)

//new

function object1(){
     console.log(`${this.value}`); 
}
console.log(object1())
const p1 = new object1(10)
const p2 = new object1(11)
console.log(p1.key,p2.key);

//default
globalThis.name = "vv"
function printd(){
    console.log("this is " + `${this.name}`);
}
printd();

function outer1(){
    let name = 0
    function inner1(){
        name ++
         console.log(name);
    }
    return inner1
}
outer1()
console.log(outer1());
function sum(a,b,c){
    return a+b+c
}
console.log(sum(1,2,3));


//generator function
function* generatorfunction(){
        yield 'mitesh'
        yield 'chaudhary'
    }

const gpobject=generatorfunction()
//console.log(typeof gpobject);
for(const word of gpobject){
    console.log(word);
}

//class
class person{
    constructor(fname,lname){
        this.fname =fname
        this.lname =lname
    }
}

function saymyname(){
    return this.fname + " " + this.lname
}

const classa = new person("mitesh","chaudhary")
const classb = new person("avish", "baliyan")

//console.log(classa.fname,classb.fname)
saymyname.call(classa)