//nested loops
let pep = {
  person1: {
    name: "mitesh",
    class: "mca",
    age: 22,
  },
  person2: {
    name: "avish",
    class: "mca",
    age: 18,
  },
  person3: {
    name: "vasu",
    class: "mca",
    age: [16, 18, 22],
  },
};

let aprint = pep.person3.age;
function bahar() {
  let bprint = pep.person2.name;
  function andar() {
    let cprint = pep.person1.name;
    function pandar() {
      console.log(aprint, bprint, cprint);
    }

    return pandar();
  }
  return andar;
}
let ff = bahar();

//closure
let acount = 0;
function outer() {
  let bcount = 0;
  function inner() {
    let ccount = 0;
    function ininnner() {
      acount++;
      bcount++;
      ccount++;
      console.log(acount, bcount, ccount);
    }
    return ininnner;
  }
  return inner();
}
let ss = outer();
ss();
ss();

//currying
function multiply(a, b, c) {
  return a * b * c;
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

let curried = curry(multiply);
//console.log(curried(1)(2)(4));

m1 = curried(1);
m2 = m1(2);
m3 = m2(3);
console.log(m3);

//this keyword and class

// class college{
//     constructor(fname,lname){
//         this.fname = fname
//         this.lname = lname
//     }
// }
function gg(fname,lname){
    this.fname = fname
    this.lname = lname

}

let first = new gg("mitesh","chaudhary")
let second = new gg("avish","chaudhary")

function pt(){
    return console.log("students are " + `${this.fname}` + `${this.lname}`);
}

pt.call(first)
console.log("students name are " + first.fname + first.lname);

//generator function
function* generator(){
    yield 'mitesh'
    yield 'avish'
}
for(const word of generator()){
    console.log(word);
}

let hh = "mitesh"
for(const w of hh){
    console.log(w);
}
