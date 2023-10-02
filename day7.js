//nested loops
// let an = 10
// function outer(){
//     let bn = 20
//     function inner(){
//         console.log(an, bn);
//     }
//     return inner()
// }
// outer()


//closure

// let ac = 10 
// function outer(){
//     let ab = 20
//     function inner(){
//           ac++
//           ab++
//           console.log(ac,ab);
//     }
//     return inner
// }

// let gg = outer()
// gg()
// gg()


let name1 = "mitesh"
function outer(){
    let name2 = "avish"
    function inner(){
        console.log(name1);
        console.log(name2);

    }
    return inner
}
let g = outer()

g()
g()

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
console.log(curried(1)(2)(3));

add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//this.keyword

let person = {
    name:"mitesh",
    age : 22,
    sayMyName : function(){
        console.log(`${this.name}` + `${this.age}`);
    }
}
person.sayMyName()

//explicit
function print(name){
    console.log( `${this.name}` + "explicitly")
}

print.call(person)

//new binding

function ll(input){
   this.name = input
}


function tt(name){
    return `${this.name}` + " new bind"
}
let first = new ll("mitesh")
console.log(tt.call(first));

//class

class pep{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}

function likethis(fname,lname){
    return `${this.fname}` +`${this.lname}` + " class"
}

let f = new pep("mitesh","chaudhary")
let s = new pep("mitesh2","chaudhary3")
console.log(likethis.call(f));
console.log(likethis.call(s));

function* generator(){
    yield '1'
    yield '2'
    yield '3'
    yield '4'
    yield '5'
    yield '6'
}
let ara = [1]
for(const num of generator()){
    if(num.includes(ara)){
        console.log(num);
    }else{
        console.log("no number matchof " + num);
    }
}

