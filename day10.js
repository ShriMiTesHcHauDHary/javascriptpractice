//nested function
// let a = 10
// function bahar(){
//     let b = 20
//     function andar(){
//         console.log(a);
//         console.log(b);
//     }
//     return andar()
// }
// bahar()

//closure
let a1 = 10
function outer(){
    let b1 = 20
    function inner(){
        a1++
        b1++
        console.log(a1,b1);
    }
    return inner
}
let gg = outer()
gg()
gg()

//currying
function add(a,b,c){
    return a+b+c
}

function curry(fn){
    return function(a){
        console.log(a);
        return function(b){
            console.log(b);
            return function(c){
                console.log(c);
                return fn(a,b,c)
            }
        }
    }
}

let curried = curry(add)
// console.log(curried(1)(2)(3));
sum1 = curried(1)
sum2 = sum1(2)
sum3 = sum2(3)
console.log(sum3);

//this keyword
//implicit
const person={
    name: "mitesh",
    class:"mca",
    saymyname : function(){
        return `name : ${this.name} , class : ${this.class}`;
    }
}
console.log(person.saymyname());
//explicit

function print(){
    console.log(`name :${this.name},class : ${this.class}`);
}

print.call(person)
//new binding
function hhh(fname,lname){
    this.fname = fname
    this.lname = lname
}

function likethis(){
    return `${this.fname} ${this.lname}`
}

let first = new hhh("mitesh","chaudhary")
let second = new hhh("mitesh2","chaudhary2")
console.log(likethis.call(second));

//prototypr

// function PEP(fname){
//     this.fname = fname
// }

// const f = new PEP("mitesh")
// const f2 = new PEP("mitesh2")

// PEP.prototype.getmyname(){
//     console.log(` this p ${this.fname}`);
// }

// getmyname.call(f)
// getmyname.call(f2)

//genenratro function
function* gen(){
    yield 'mitesh'
    yield 'chaudhary'
}

for(const w of gen()){
    console.log(w);
}
//class
class per{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function py(){
    return `${this.fname} ${this.lname}`
}

const gg1 = new per("avish","baliyan")
const gg2 = new per("avish2","baliyan2")
console.log(py.call(gg1));
console.log(py.call(gg2));

//prototype
function pp(fname,lname){
    this.fname = fname
    this.lname = lname
}

const pp1 = new pp("vasu","jaat")
const pp2 = new pp("avish","jaat")

 pp.prototype.getit = function(){
  return `${this.fname} ${this.lname}`
}
console.log(pp1.getit());
console.log(pp2.getit());
