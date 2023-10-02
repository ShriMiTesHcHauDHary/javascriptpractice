//nested loops
function bahar(){
    let an = 100
    function andar(){
        let bn = 100
        function andar2(){
            console.log(an, bn);
        }
        return andar2()
    }
    return andar()
}

bahar()

//closures loops
let ac = 10
function outer(){
    let bc = 10
    function inner(){
        ac++
        bc++
        function minner(){
            console.log(ac,bc);
        }
        return minner()
    }
    return inner()
}

let gg = outer();
gg()
gg()

//currying
function add(a,b,c){
    return a + b + c ;
}

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

let cuu = curry(add)
//console.log(cuu(1)(2)(3));
let add1 = cuu(1)
let add2 = add1(2)
let add3 = add2(3)
console.log(add3);

//this ketword
//inplicit

let person={
    name : "mitesh",
    saymyname :function(){
        console.log("My name is " + `${this.name}`);
    }
}
person.saymyname()

//defualt

globalThis.name = "avish"
function p(name){
 return `${this.name}`
}
console.log(p());

//explicit
function print(name){
    console.log("explicit name is " + name);
}

print(person.name)

//new binding
function op(name){
    this.key = name
}
let first = new op("m")
let first2 = new op("a")
console.log(first.key);
console.log(first2.key);

//function genrator
function* generator(){
    yield 'mitesh'
    yield 'avish'
}

for(const w of generator()){
    console.log(w);
}

class pop{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

let f1 = new pop("mitesh","chaudhary")
let s2 = new pop("vasu","meherwal")

function h(){
    return `${this.fname}` + `${this.lname}`
}

let k = h.call(f1)
let k2 = h.call(s2)
console.log(k);
console.log(k2);