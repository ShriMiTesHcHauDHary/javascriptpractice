//nested loops
let a = 10
function outer(){
    let b = 20
    function inner(){
    a++
    b++
    console.log(a,b);
    }
    return inner()
}
outer()

//clouser
let ac = 0
function bahar(){
    let bc = 0
    function anadar(){
        ac++
        bc++
        console.log(ac,bc);
    }
    return anadar
}
let ghg = bahar()
ghg()
ghg()

//curry
function add(a,b,c){
     return a + b + c ;
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
let add1 = curried(1)
let add2 = add1(2)
let add3 = add2(3)
console.log(add3);

//this
//implicit
const person={
    name : "mitesh",
    sayMyName : function(){
        return console.log(`${this.name} + implicit`);
    }
}

person.sayMyName()

function printlikethis(){
    return console.log(`${this.name} + explicit`);
}
printlikethis.call(person)

//new binding
function power(name){
    this.name = name
}

function printit(){
    return `${this.name} + new binding`
}

const power1 = new power("mitesh")
const power2 = new power("avish")

power.prototype.sayit = function(){
    return `${this.name}`
}

console.log(power1.sayit());
console.log(power2.sayit());

function* ff(){
    yield 'hello'
    yield 'world'
}
for(const w of ff()){
    console.log(w);
}

//class
class people{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}


function newprint(){
    return `${this.fname} + ${this.lname}`
}
const first1 = new people("mitesh","choudhary")
const second2 = new people("avish","choudhary")

console.log(newprint.call(first1));
console.log(newprint.call(second2));