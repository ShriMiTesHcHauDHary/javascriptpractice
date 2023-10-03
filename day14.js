//nested loops

let an = "mitesh";
function outer() {
  let bn = "avish";
  function inner() {
    console.log(an, bn);
  }
  return inner();
}
outer();

//closure

let ac = 10;
function bahar() {
  let bc = 20;
  function inner() {
    ac++;
    bc++;
    console.log(ac, bc);
  }
  return inner;
}
let hih = bahar(); //now function innner is in this and ready to invoke
hih();
hih();

//currying

function sum(a, b, c) {
  return a+b+c
}

function curry(fn) {
    return function (a) {
      console.log(a);
      return function (b) {
        console.log(b);
        return function (c) {
          console.log(c);
        return fn(a, b, c);
      };
    };
  };
}

let cur = curry(sum)
//console.log(cur(1)(2)(3));
add1 = cur(1)
add2 = add1(2)
add3 = add2(3)
console.log(add3);

//this ketyword
//implicit
let person ={
    name :"mitesh",
    sayMyName :function(){
        return console.log(`name is im ${this.name}`);
    }
}
person.sayMyName()


//explicit
function likethis(){
    return console.log(`this is ex ${this.name}`);
}

likethis.call(person)

//prototype and new binding
function hero(fname,lname){
    this.fname = fname
    this.lname = lname
}

let hero1 = new hero("mitesh","chaudhary")
let hero2 = new hero("avish","chaudhary")

hero.prototype.likeit = function(){
    return `fname ${this.fname} lname ${this.lname}`
}
console.log(hero1.likeit());
console.log(hero2.likeit());

//gnerator function
function* hui(){
    yield 'hello'
    yield 'world'
}
for(const w of hui()){
    console.log(w);
}

//class
class per{
    constructor(fname){
        this.fname = fname
    }
}
const hh = new per("mitesh")
function likethis(){
    return console.log(`this is class ${this.fname}`);
}
likethis.call(hh)