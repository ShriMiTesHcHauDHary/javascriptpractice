//nested scopw
// let a = 10
// function outer(){
//     let b = 10
//     function inner(){
//         a++
//         b++
//         console.log(a , b);
//     }
//     return inner()
// }

outer();
let a = 10;
function outer() {
  let b = 10;
  function inner() {
    a++;
    b++;
    console.log(a, b);
  }
  return inner;
}

let t = outer();
t();
t();

//currying
function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
let curr = curry(sum);
console.log(curr(1)(2)(3));

function person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

let person1 = new person("mitesh", "1");
let person2 = new person("mitesh", "2");

person.prototype.sayit = function (){
  return console.log(`fname = ${this.fname} lname = ${this.lname}`);
};

console.log(person1.sayit());


class pep{
    constructor(fname,lname){
        console.log("hui");
    }
}