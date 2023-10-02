//nested function loops
let aa = "mitesh"
function pt(){
    let  ab = "avish"
    function ptb(){
        console.log(aa,ab);
    }
    return ptb()
}
pt()

//closure
let aba = 0
function outer(){
    let bab = 0
    function inner(){
        aba ++ 
        bab ++ 
        console.log(aba,bab);
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
                return fn(a,b,c);
            }
        }
    }
}
let curried = curry(sum)
console.log(curried(1)(2)(3));

//this
//implicit
// const person ={
//     name:"mitesh",
//     saymyname : function (){
// console.log(`${this.name}`);
//     }
// }
// person.saymyname()

//explicit
function p(){
    return `${this.name} exlicity`
}

console.log(p.call(person));

//new binding
function pt(fname,lname){
 this.fname = fname
 this.lname = lname
}

function ppt(){
    return `fname = ${this.fname} lastname = ${this.lname}`
}

const first = new pt("mitesh","choudhary")
const second = new pt("avish","choudhary")

console.log(ppt.call(first));
console.log(ppt.call(second));

//prototype
function person(name){
    this.name = name
}

const person1 = new person("mitesh");
const person2 = new person("avish");

person.prototype.getitdone = function(){
     return `${this.name}`
}

console.log(person1.getitdone());
console.log(person2.getitdone());


class prp{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function ppy(){
    return `fname = ${this.fname} lastname = ${this.lname}`
}

const hh = new prp("m","c")
const hh2 = new prp("a","c")

console.log(ppy.call(hh));
console.log(ppy.call(hh2));