//variable
let al = 100;
al = 10;
console.log(al);

//const:- once initialized must be declared once declared can,t be redeclared
const ac = 100;
// ac =10
console.log(ac);

//data types
//primitives
console.log("mitesh");
console.log(100);
console.log(true);
console.log(null);
console.log(undefined);

//non-primitives
let per = {
  p1: {
    name: "mitesh",
    class: "mca",
    age: 22,
  },
  p2: {
    name: "mitesh2",
    class: "mca",
    age: 22,
  },
  p3: {
    name: "mitesh3",
    class: "mca",
    age: 22,
  },
  p4: {
    name: "mitesh4",
    class: "mca",
    age: [21, 22, 23],
  },
};
console.log(per.p4.age[1]);
//array
let arra = [
  {
    p1: {
      name: "mitesh",
      class: "mca",
      age: 22,
    },
    p2: {
      name: "mitesh2",
      class: "mca",
      age: 22,
    },
    p3: {
      name: "mitesh3",
      class: "mca",
      age: 22,
    },
    p4: {
      name: "mitesh4",
      class: "mca",
      age: [21, 22, 23],
    },
  },
  1,
  2,
  3,
  4,
];

console.log(arra[0].p4.age[1]);

//operators
//+-*/%++,--
//string
console.log("mitesh" + 22);
console.log("mitesh" + null);
console.log("mitesh" + undefined);
console.log("mitesh" + true);

//ternary operators
let num = 11;
const isodd = num % 2 === 0 ? "not odd " + num : "is odd " + num;
console.log(isodd);

//types of conversions
console.log(" ");
console.log("10" - 5); //5
console.log("10" - null); //10
console.log("10" - true); //9
console.log("10" - false); //10
console.log("10" - []); //10
console.log("10" - {}); //nan
console.log("10" - "mitesh"); //nan
console.log("10" - undefined); //nan

//number
console.log(Number("m"));
console.log(Number(true));
console.log(Number(null));
console.log(Number(false));
console.log(Number([]));
console.log(Number({}));
console.log(Number(" "));
//string
console.log(String(null));
console.log(String(undefined));

//boolean
//false :- 0 " " nan undefined null

//conditional operator
let dice = 7;
// if(dice <= 0 || dice > 6){
//     return console.log(`dice can't be this ${dice} try again`);
// }else{
//     console.log(`move forward by ${dice}`);
// }

switch (dice) {
  case 1:
    console.log(`move forward by ${dice}`);
    break;
  case 2:
    console.log(`move forward by ${dice}`);
    break;
  case 3:
    console.log(`move forward by ${dice}`);
    break;
  case 4:
    console.log(`move forward by ${dice}`);
    break;
  case 5:
    console.log(`move forward by ${dice}`);
    break;
  case 6:
    console.log(`move forward by ${dice}`);
    break;
  default :
    console.log(`${dice} err try again`);
}


//loops
let arrayl = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 1; i<= arrayl.length;i++){
//     console.log(`iteration this time is ${i}`)
// }
// let i = 1
// while(i <= arrayl.length){
//     console.log(i);

//     ++i
// }
let i = arrayl.length
do{
    console.log(`iteration is ${i}`)

    --i
}while(i)

//for of
let aga = [1,2,3,4,5,6,7,8,9,10]
let ala = "mitesh"
for(const num of aga){
    console.log(aga[num] + " on " + num);
}
for(const word of ala){
    console.log(word);
}

//for in loop object 
let ob = {
    p1 : "mitesh1",
    p2 : "mitesh2",
    p3 : "mitesh3",
    p4 : "mitesh4",
    p5 : "mitesh5",
}
for(const obj in ob){
    console.log(ob[obj] + " on " + obj );
}

//fucntion
function isprime(n){
    if(n <= 1){
        return "number is not prime " + n
    }

    for(let i = 2 ; i < n; i++){
        let check = n % i === 0 ? "not prime " + n : "is prime " + n
        return console.log(check);
    }
}

isprime(127)

//arrow function
let ab = (a) =>{
    let check = a % 2 ===0 ? "is even " + a : "is odd " + a
     return check
}
let g = ab(11)
console.log(g);

//scope
let name2 = "avish"
if(true){
    let name = "mitesh"
    console.log(name);
    console.log(name2);
}

function p(){
    let name = "vasu"
    
    console.log(name);
    console.log(name2);
}
p()


