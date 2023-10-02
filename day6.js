//nested function scope
let an = 10
function bahar(){
    let ab = 20
    function andar(){
         console.log(an,ab);

    }
     return andar()
}
bahar()

//closure
let dd = 10
let cc = 20

function outer(){
    let bb = 30
    function inner(){
        dd++
        cc++
        bb++
        console.log(dd,cc,bb);
    }

    return inner
}
let g = outer()
g()//11,21,31
g()//
let name1 ="mitesh"
function a(){
    
    function b(){
         console.log("hi " + name1)
    }
    return b()

}

a()

//currying
function multi(a,b,c){
    return a * b * c
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

let curried = curry(multi)
console.log(curried(1)(2)(3));
amult1 = curried(1)
amutl2 = amult1(2)
amult3 = amutl2(3)
console.log(amult3);

//thiskeyword
class pep{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
}


function print(){
    return `${this.fname}` + `${this.lname}`
}

let first = new pep("mitesh","chaudhary")
let second = new pep("avish","chaudhary")


console.log(print.call(first));
console.log(print.call(second));

//implicit
let pers={
    name : "mitesh",
    class :"mca",
    print : function(){
        console.log(`${this.name}` + `${this.class}`);
    }
}

pers.print()

function hh(name){
    this.name = name
}

let l = new hh("kk")
let li = new hh("kki")
console.log(l.name);
console.log(li.name);


function* generator(){
    yield "mitesh"
    yield "mitesh2"
}

for(let w of generator()){
    console.log(w);
}


//settimeout()

// setTimeout(function run(){
//     console.log("ll")
//     setTimeout(run, 1000)
// }, 2000)


// function p(){
//     console.log("kk");
// }
//  let jj =setInterval(p, 2000)
//  console.log(jj);

//  clearInterval(jj)

//callbacks
function sum(a,b){
   console.log(a + b)
}

function higherorder(fn){
    let a = 10
    let b = 10
    fn(a,b)
}

higherorder(sum)


// let str ="not"
// const result = new Promise((resolve,reject) => {
//     if(str === "found"){

       
//         resolve()
//     }else if(str ==="not"){
//         console.log("not found");
//         reject()
//     }else{
//         console.error('something else');
//     }
// })

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         reject('not bringing tacos food truck not found')
//     },3000)
// })

// const onFulfillment = (result) => {
//     console.log(result)
//     console.log('set up the table tacos found');
// }

// const onRejection = (result) => {
//     console.log(result)
//     console.log('go for past not found ');
// }


// result.then(console.log("set up table i am coming")).catch((err) => console.log(err))




let result = new Promise((res,rej) => {

    let text = "uuuu"

    if(text === "found"){
        
        res(text)
    }else if(text === "not"){
        
        rej(text)
    }else{
        return console.error("saying something else");
    }
})

function res(text){
    return console.log("set up table text is " + text)
}
function rej(text){
    return console.log("go for pasta ans is " + text)
}

result.then(res).catch(rej)