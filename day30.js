//variable 
//let :- once declared can be updated 
let al = 100
al = 10
console.log(al);
//const :- once initialised must be declared once decalred can't be updated
const ac = 100
// let ac = 10
console.log(ac);

//data type :- inputs and values
// primitives :- whch contain actual values
//string
console.log("string");
console.log(100);
console.log(true);
console.log(null);
let aun 
console.log(aun);
//non primitives :- collection of data types
const person={
    p1 :{
        name : "mitesh",
        class : "MCA",
        age : [21,22,23]
    },
    p2 :{
        name : "mitesh2",
        class : "MCA",
        age : [21,22,23]
    },
    p3 :{
        name : "mitesh3",
        class : "MCA",
        age : [21,22,23]
    },
    p4 :{
        name : "mitesh4",
        class : "MCA",
        age : [21,22,23]
    },
}
console.log(person.p4.age[1]);
//array
let arrlay = [0,1,2,3,4,5,6,7,8,9,10]
let affa = [0,1,2,3,4,5,6,7]
for(let i = 0 ; i <arrlay.length; i++){
    if(!affa.includes(arrlay[i])){
        console.log(`${arrlay[i]} not present`);
    }
}

//operators
//assigning =
//arhmetic operators +-/*%++--
//comparsion operator ==,===,>=,<=,>,<,!==
//logical operator &&,||
//concatination operator
console.log("mitesh" + "choudhary");
console.log(4 + "4");
console.log(4 + + "4");
//ternary operator
let num = 10
const ggt = num%2 ===0? "even" : "odd"
console.log(ggt);

//types of conversion
console.log(10 - "10");//0
console.log(10 - 10);//0
console.log(10 - true);//9
console.log(10 - false);//10
console.log(10 - undefined);//nan
console.log(10 - "string");//nan
console.log(10 - null);//10
console.log(10 - {});//nan
console.log(10 - []);//10
console.log(10 - " ");//10

//string
console.log(String(null));

//boolean
//false :- null, " ", 0 ,undefined, nan

//conditonal
let dice = 1
// if(!Number(dice)){
//      return console.log(`${dice} is nan`);
// }else if( dice > 0 && dice < 7){
//     console.log(` move forward by this ${dice}`);
// }else{
//     console.log("try again must be between 1 to 6");
// }
switch(dice){
    case 1 :
    console.log(`${dice} move forward by this `);
    break;
    case 2 :
    console.log(`${dice} move forward by this `);
    break;
    case 3 :
    console.log(`${dice} move forward by this `);
    break;
    case 4 :
    console.log(`${dice} move forward by this `);
    break;
    case 5 :
    console.log(`${dice} move forward by this `);
    break;
    case 6 :
    console.log(`${dice} move forward by this `);
    break;
    default :
    console.log(`try again`);
}

//loops
//for
for(let i = 10 ; i >= 0; i--){
    console.log(i);
}
//while loop
let i = 1
// while(i <= 20){
//     console.log(i);
//     i++
// }
//do while
do{
    console.log(i);
    i++
}while(i > 0 && i <= 10)

//for of loop
let stst = "miteshchoudhary"
for(const w of stst ){
    console.log(stst + " on " + w);
}
for(const i of arrlay){
    console.log(i);
}
//for in
let pep = {
    1 : "one",
    2 : "two",
    3 : "three"
}
for(const key in pep){
    console.log(pep[key] + " on " + key);
    //lement on that particaluar key
}

// //function
// function isPrime(n){
//     if(n <= 1)
//     return false

//     for(let i=2; i < Math.sqrt(n) ; i++ ){
//         let check = n % i ===0 ? false : true
//         return check
//     }


// }
// let numu = 100
// let result = isPrime(numu)
// if(result){
//     return console.log(`yes ${numu} is prime`);
// }else{
//     return console.log(` ${numu} is not prime`);
// }


let iseven = (a) =>{
    let checkit = a % 2 === 0 ? true : false
    return checkit
  }
  let g20 = iseven(15)
  console.log(g20);

//scope
//block scope
globalThis.name1 = "mitesh"
if(true){
    let name2 ="avish"
    console.log(name2);
    console.log(name1);
}
function pepp(){
    let name3 = "vasu"
    console.log(name3);
    console.log(name1);
}
pepp()