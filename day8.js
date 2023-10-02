//nested loops
let an = "mitesh"
function bahar(){
    let bn = "avish"
    function andar(){
        console.log(an,bn);
    }
    return andar()
}
bahar()

//closure
let ac = 1
function outer(){
    let bc = 2
    function andar(){
        ac++
        bc++
        console.log(ac,bc);
    }
    return andar
}
let gg = outer()
gg()
gg()
let a = "mitesh"
function h(){
   let jj  = "hh"
    function e(){
        console.log(a,jj);
    }
    return e
}

let g= h()
g()

//currying
function multi(a,b,c){
    return a*b*c
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

let cu = curry(multi)
// console.log(cu(1)(2)(3));

m1 = cu(1)
m2 = m1(2)
m3 = m2(3)
console.log(m3);

//this keyword
//explicit
let pep ={
    name : "mitesh",
    printMyName : function(){
        return console.log(`name is ${this.name}`);
    }
}

pep.printMyName()

//explicit

function p(){
    return `${this.name}chaudhary`
}
let ss = p.call(pep)
console.log(ss);

//new binding
function dd(name){
    this.name = name
}

let f = new dd("mitesh")
let f2 = new dd("mitesh2")

console.log(p.call(f2));

//class
class rer{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function m(){
    return console.log(`${this.fname} ${this.lname}`);
}

let fir = new rer("mitesh1","chaudhary1")
let fir2 = new rer("mitesh2","chaudhary2")

m.call(fir)
m.call(fir2)

//generator fyunction

function* generator(){
    yield 'hello'
    yield 'world'
}

for(const words of generator()){
    console.log(words);
}

