//nested scope
// let nam = 1
// function outer(){
//     let bam = 2
//     function inner(){
//         console.log(nam,bam);
//     }
//     return inner()
// }

// outer()

//closure
let naam = 1 
function outer(){
    let baam = 2
    function inner(){
        naam++
        baam++
        console.log(naam,baam);
    }
    return inner
}
let neew = outer()
neew()
neew()
neew()
neew()


//currying
function sum(a,b,c){
    return a+b+c
}

function curry(fn){
    // console.log(a)
    // return a
    return function(a){
         console.log(a)
        return function(b){
             console.log(b)
             return function(c){
                console.log(c)
                return fn(a,b,c)
            }
        }
    }
}

let curried = curry(sum)
// console.log(curried(1)(2)(3));
add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//this keyword

//implicit
let person={
    naam : "mitesh",
    letsay : function(){
        console.log(`naam = ${this.naam}`);
    }
}

person.letsay()

//explicit
function thisway(){
    console.log(`naam is ${this.naam}`);
}

thisway.call(person)

//prototype
function pop(fname,lname){
    this.fname = fname
    this.lname = lname
}

let pop1 = new pop("mitesh","chaudhary")
let pop2 = new pop("avish","chaudhary")

pop.prototype.itis = function(){
    console.log(`fname is ${this.fname} lname is ${this.lname}`);
}

pop1.itis()


function* gnerator(){
    yield "hello"
    yield "mitesh"
}

for(const w of gnerator()){
    console.log(w);
}
class persons{
   constructor(fname,lname){
    this.fname = fname
    this.lname = lname
   }
}

let per1 = new persons("mitesh","c")
let per2 = new persons("avish","c")

function jj(){
    return `fname is ${this.fname} lname is ${this.lname}`
}

console.log(jj.call(per1));
console.log(jj.call(per2));
