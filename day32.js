//variable
let av = 100;
av = 10;
console.log(av);

const ac = 100;
// ac = 10
console.log(ac);

//data type
//primitives one which contain actual values
let as = "string";
console.log(as);
//number
console.log(100);
//boolean
console.log(true);

//non primitives
let pers = {
  p1: {
    name: "mitesh",
    class: "mca",
    age: [21, 22, 23],
  },
};
console.log(pers.p1.age[0]);

//array
let avr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avr[0]);

//operators
//arthmetic +,-,/,*,%,++i,--i
//cpmpaarion ==,===,!==,>=,<=,>,<
//logical opertor && ||
//string operators
console.log("1" + 1 + 1);
//ternary operators
let num = 10;
let chk = num % 2 === 0 ? "even" : "odd";
console.log(chk);

//conversions
console.log(10 - "5"); //5
console.log(10 - "string"); //nan
console.log(10 - null); //10
console.log(10 - false); //10
console.log(10 - true); //9
console.log(10 - undefined); //nan
console.log(10 - []); //10
console.log(10 - {}); //nan
console.log(10 - " "); //10

console.log(Number([]));
console.log(Number({}));
console.log(Number(" "));

//conditional operators
let dice = 1;
// if(!Number(dice)){
//     return console.log(`${dice} is not a number`);
// }else if(dice > 0 && dice < 6){
//     console.log(`move forward by ${dice}`);
// }else{
//     console.log("try again");
// }

switch (dice) {
  case 1:
    console.log(`moveforward by ${dice}`);
    break;
  case 2:
    console.log(`moveforward by ${dice}`);
    break;
  case 3:
    console.log(`moveforward by ${dice}`);
    break;
  case 4:
    console.log(`moveforward by ${dice}`);
    break;
  case 5:
    console.log(`moveforward by ${dice}`);
    break;
  case 6:
    console.log(`moveforward by ${dice}`);
    break;
    default :
    console.log(`try again`);
}


//loops
let arraya = [0,1,2,3,4,5,6,7,8,9,10]
// for(let i = 0;i< arraya.length;i++){
//     console.log(i);
// }

let i = 0
// while(i<arraya.length){
//     console.log(i);
//     i++
// }
do{
    console.log(i);
    i++
}while(i>0 && i < arraya.length)

//iterations
//for of loop use for array and string
let hhh = "mitesh"
for(const i of arraya){
    console.log(arraya[i] + "on" + i);
}
for(const i of hhh){
    console.log(i);
}

//for in loops for object
let heh = {
    1 :"one",2 : "two",3 : "three"
}
for(const key in heh){
    console.log(heh[key] + " on " + key);
}

//function 
function isprime(n){
    if(n<=1) false

    for(let i=2;i<=Math.sqrt(n);i++){
        let check=n%i===0? "not prime" : "prime"
        console.log(check);
        break
    }
}

isprime(10)

//arraow function 
let arraow =(a,b)=>{
    return a + b ;
}
console.log(arraow(10,10));

//nested
// let an = 10
// function outer(){
//     let bn = 10
//     function inner(){
//         console.log(an,bn);
//     }
//     return inner()
// }
// outer()
//clouser
let acd = 0
function outer(){
    bc= 0
    function inner(){
        acd++
        bc++
        console.log(acd,bc);
        
    }
    return inner
}
let hui = outer()
hui()
hui()

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

let cur = curry(sum)
console.log(cur(1)(2)(3));

//this keyword
let person={
    name :"mitesh",
    sayMyName :function(){
        return console.log(`name = ${this.name} `);
    }
}
person.sayMyName()

//explicit
function printlikethis(){
    return console.log(`name is ${this.name}`);
}


