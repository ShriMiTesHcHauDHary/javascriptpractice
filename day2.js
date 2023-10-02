//nested loops

function bahar(){
    let a = 123
    function andar(){
        let b = 456
        function aurandar(){
            let c =789
            console.log(a,b,c);
        }
        return aurandar()
        
    }
    return andar()
}
bahar()

//clouser

// function bahar(){
//     let a = 0
//     function inner(){
//         let b = 0
//         function eandar(){
//             let c = 0
//             console.log(a,b,c);

//         }
//         return eandar()
//     }
//     return inner()
// }
// let fee = bahar()
// console.log(fee);

//clouser
let counta=0
function outerr(){
    let countb = 0
    function innere(){
        
            counta++
            countb++
            console.log(counta,countb);
         
    }
    return innere
}

let o = outerr()
o()
o()

let naam = "mitesh"
function hname(){
    let naam2 = "avish"
    function yname(){
        console.log(naam,naam2);

    }
    return yname
}
let h = hname()
h()
h()

//clurrying
function add(a,b,c){
    return a + b + c
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
let curried = curry(add)
console.log(curried(1)(2)(3));
add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//this
globalThis.name = "new mitesh"
let person={
name :"mitesh",
    sayMyName : function(){
   console.log("my name is " + `${this.name}`);
    }
}

person.sayMyName()

//explicit
globalThis.name= "mitesheeee"
function experson(name){
    console.log("this is me " + `${this.name}`);
}

experson()

//new
function bnew(name){
    this.name = name
}

let name1 = new bnew("vasu")
let name2 = new bnew("radika")
console.log(name1.name,name2.name);

//class 
class thisclass{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function printname(){
    return this.fname + " " + this.lname
}

let first = new thisclass("vivansh","ji")
let second = new thisclass("suman","ji")


let dd =printname.call(first)
let dd1 =printname.call(second)
console.log(dd);
console.log(dd1);

function* generator(){
    yield 'm'
    yield 'i'
    yield 't'
    yield 'e'
    yield 's'
    yield 'h'
}

for(const g of generator()){
    console.log(g);
}