//nested function scope
//nested scope always starts return and console journey from within
let a = 10;
function bahar(){
    let b = 20 
    function andar(){
        let c = 30
        console.log(a,b,c)
    }
    andar()
    // console.log(c)
}
// console.log(b)
bahar()

//closure
let e = 0
function a1(){
    let b = 0
    function c(){
        b++
        e++
        console.log(b,e)
    }
    return c
}

let g = a1()
g()//first time function invoke it remembers the value we assign it
g()// this will provide value with acknowleding live data of same previous function in terminal

let f = 5
function w1(){
    let g = 6 + f
    function w2(){
        let l= f + g
        console.log(l)
    }
    return w2
}

let r = w1()
r()
r()

//this

 function saymyname(name){
  console.log(`this is my ${name}`)
 }
 saymyname(`mitesh`)
 saymyname("mitesh2")
//implicit
 const person = {
    name :"mitesh",
    saymyname1:function(){
        console.log(`my name is ${this.name}`)
    }
 }

 person.saymyname1()

 //explicit  use call back function .call(where value exist)

 function saymyname3(){
    console.log(`my name is ${this.name}`)
 } 

 saymyname3.call(person)//every function have inbuilt function to invoke value

 //new binding

 function name(person){

//this means === object

    this.person = person //this is object { } with key inside person : "mitesh"
 }
//functionname(datatype) will be assigned to document key person
 const a1a = new name("mitesh")//these name as constructor function
 const a2a = new name("laddu")
console.log(a1a.person);
console.log(a2a.name);

//this keyword
//implicit:- in the function itself
//explicit :- using another object to take data type for value needed with .call(object)
//new to specify make new this { } and enter this value
//default :- will find itself globally middleware se


//curring

function add(a,b,c){
    return a + b + c
}

//console.log(add(1,2,3))

function curry(fn){
    return function(a){
        return function (b){
            return function (c){
                return fn(a,b,c)
            }
        }
    }
}

const cuuried = curry(add)
console.log(cuuried(1)(2)(3))