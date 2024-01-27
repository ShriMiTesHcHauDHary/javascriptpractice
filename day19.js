//nested 
// let nOne = 100
// function outer(){
//     let ntwo = 200
//     function inner(){
//         console.log(nOne,ntwo);
//     }
//     return inner
// }

// outer()

//clouser
let none = 0
function outer(){
    bone = 1
    function inner(){
        none++
        bone++
        console.log(none,bone);
    }
    return inner
}
let jj =outer()
jj()
jj()


//currying
function sum(a,b,c){
    return a + b + c
}

function curry(fn){
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
add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//class this prototype
class person{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

let person1 = new person("mitesh","chaudhary")
let person2 = new person("avish","chaudhary")

person.prototype.likethis = function(){
    //  console.log(`fname is ${this.fname} lname is ${this.lname}`);
     return `fname is ${this.fname} lname is ${this.lname}`
}

console.log(person1.likethis());
// console.log(likethis.person2);
function* hello(){
    yield "hello"
    yield "world"
}

for(const w of hello()){
    console.log(w);
}