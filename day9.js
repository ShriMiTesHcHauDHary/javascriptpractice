//nested loops
let an = 100
function bahar(){
    let bn = 90
    function andar(){
        console.log(an,bn);
    }
    return andar()
}
bahar()
//closure
let ac = 0
function outer(){
    let bc  = 0
    function inner(){
        ac++
        bc++
        console.log(ac,bc);
    }
    return inner
}
let gg = outer()
gg()
gg()

//currying

function sum(a,b,c){
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

let curried = curry(sum)
// console.log(curried(1)(2)(3));
add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//thiskeyword
//implicit
let pep ={
    name :"mitesh",
    sayMyName : function(){
        return `my name is ${this.name}`
    }
}

console.log(pep.sayMyName());

//explicit
function likethis(){
    return `${this.name} with explicit way`
}

console.log(likethis.call(pep));

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

//class
class person{
  constructor(fname,lname){
    this.fname = fname
    this.lname = lname
  }
}

function ggh(){
    return `fname : ${this.fname} lname :${this.lname}`
}
let f = new person("avish","baliyan")
let s = new person("vasu","meherwale")
console.log(ggh.call(s));

function* generator(){
    yield 'hello'
    yield 'world'
}
let ghg = generator()
for(const w of ghg){
    console.log(w);
}


