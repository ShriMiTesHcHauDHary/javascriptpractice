//nested loops
// let  al = 1
// function outer(){
//     let b = 2
//     function inner(){
        
//         console.log(al,b);
//     }
//     return inner()
// }
// outer()

//closure : combinationa and its scope of change is called closure
let ac = 0
function outer(){
    let bc = 0
    function inner(){
        ac++
        bc++
        console.log(ac,bc);
    }
    return inner
}
let ccc = outer()
ccc()
ccc()

//currying:- multiple argument into sequence nested argument which take one input at once
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
                return fn(a,c,b)
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

//this.keyword
//implicit
let person = {
     name : "mitesh",
     sayMyName : function(){
        return console.log(`name is implicit ${this.name} `);
     }

}
person.sayMyName()

//explcit
function thisway(){
    return console.log(`name is explicit ${this.name} `);
}

thisway.call(person)

//new binding and  protoptype
function proper(fname,lname,age){
 this.fname = fname
 this.lname = lname
 this.age = age
}

let proper1 = new proper("mitesh","chaudhary",22)
let proper2 = new proper("avish","chaudhary",19)
let proper3 = new proper("vasu","chaudhary",17)

proper.prototype.likeThis = function(){
    return console.log(`fname = ${this.fname} , lname = ${this.lname} ,  age = ${this.age}`);
}
proper1.likeThis()
proper2.likeThis()
proper3.likeThis()

//generator function
function* good(){
    yield 'hello'
    yield 'world'
}
for(const w of good()){
    console.log(w);
}

//class
class pop{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function printit(){
    return `${this.fname} , ${this.lname}`
}

let first = new pop("mit","hariwal")
let second = new pop("avish","chaudhary")
console.log(printit.call(first));
console.log(printit.call(second));


//teration
// const obj ={
//     [Symbol.iteration]: function(){
//         let step = 0
//         const iterator ={
//             next: function(){
//                 step++
//                 if(step === 1){
//                     return {value : 'hello', done: false}
//                 }else if(step === 2){
//                     return {value : 'world', done: false}
//                 }
//                 return { value : undefined, done :true}
//             },
//         }
//     },
// }

// for(const w of obj){
//     console.log(w);
// }