// //nested loops
// let a = 100
// function outer(){

//     let b = 100
//     function inner(){
//         a++
//         b++
//         console.log(a,b);

//     }
//     return inner()
// }
// outer()


//nested loops
// let a = 100
// function outer(){

//     let b = 100
//     function inner(){
//         a++
//         b++
//         console.log(a,b);

//     }
//     return inner
// }
// let gg = outer()
// gg()
// gg()
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
console.log(curried(1)(2)(3));

class person{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}


let person1 = new person("m","c")
let person2 = new person("a","c")

person.prototype.itis = function(){
    return `fname is ${this.fname} lname is ${this.lname}`
}

console.log(person1.itis());

function* generator(){
    yield "hello"
    yield "world"
}

for(const w of generator()){
    console.log(w);
}