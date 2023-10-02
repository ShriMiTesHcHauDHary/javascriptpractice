//nested loops
let a1 = 10
function bahar(){
    let b = 10
    function andar(){
        console.log(a1,b);
    }
    return andar()
}
bahar()

//closure:-
let ca = 10
let cb = 100
function outer(){
    
    function inner(){
        ca++
        cb++
        console.log(ca,cb);

    }
    return inner// carrying some live data in
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
add1 = curried(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//this keyword
//implicit

let person={
    name: "mitesh",
    age : 22,
    printit : function(){
        console.log("details are " + `${this.name}` + `${this.age}` );
    }
}

person.printit()//call object key which return or console something
//explicit


class hehe{
    constructor(name,age){//constructor an method to initiaze object
        this.name = name
        this.age = age
    }
}
function printthis(){
    return `${this.name}` + `${this.age}`
}

let f = new hehe("mitesh",22)
let s = new hehe("avish",18)
console.log(printthis.call(f));
console.log(printthis.call(s));//this needed a call back inbuilt function to call something
//class is a blueprint to create an object

function* generator(){
    yield 'mitesh'
    yield '22'
}
for(let key of generator()){
    console.log(key);
}