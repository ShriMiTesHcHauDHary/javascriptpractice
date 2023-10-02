//variable
//let :- once initialised gives unditenfied and can be updated later on
let al = 100
al = 10
console.log(al);
//const :- once initialised must be declared once can't be updated
const ac = 100
// ac = 10
console.log(ac);
//data types
//primitives:- which contain actual value
//string
let as = "string"
console.log(as);
console.log("string");
//number
console.log(11);
//boolean
console.log(true);
//null and undefined
console.log(null);
console.log(undefined);
//non primitives data type these are th e collection of data types
let person = {
    p1 :{
        name :"mitesh1",
        classs :"MCA",
        age :[21,22,23]
    },
    p1 :{
        name :"mitesh1",
        classs :"MCA",
        age :[21,22,23]
    },
    p2 :{
        name :"mitesh2",
        classs :"MCA",
        age :[21,22,23]
    },
    p3 :{
        name :"mitesh3",
        classs :"MCA",
        age :[21,22,23]
    },
    p4 :{
        name :"mitesh4",
        classs :"MCA",
        age :[21,22,23]
    }
}
console.log(person.p4.age[1]);
//array
let arra = [0, {
    p1 :{
        name :"mitesh1",
        classs :"MCA",
        age :[21,22,23]
    },
    p1 :{
        name :"mitesh1",
        classs :"MCA",
        age :[21,22,23]
    },
    p2 :{
        name :"mitesh2",
        classs :"MCA",
        age :[21,22,23]
    },
    p3 :{
        name :"mitesh3",
        classs :"MCA",
        age :[21,22,23]
    },
    p4 :{
        name :"mitesh4",
        classs :"MCA",
        age :[21,22,23]
    }
},2,3,4,5,6,7,8,9,10]
console.log(arra[1].p4.age[1]);
//operators
//+-=*/%++--
//condtional operators
// === == !== >= <=
console.log(3 === "3");
//logical operators
//|| &&
//string operator
console.log(3 + "3");//33
console.log(3 - "3");//0
console.log(3 + + "3");//6
console.log(3 - - "3");//6

//ternary operator
let check = 10 % 2 ===0 ? "iseven" : "isodd"
console.log(check);
//types of conversion
//implicit
console.log(10 - "5");//5
console.log(10 - null);//10
console.log(10 - false);//10
console.log(10 - true);//9
console.log(10 - "true");//nan
console.log(10 - undefined);//nan
console.log(10 - []);//10
console.log(10 - {});//nan
console.log(10 - " ");//10
//explicict conversions
console.log(Number("string"));//nan
console.log(Number(undefined));//nan
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number([]));//0
console.log(Number({}));//nan
console.log(Number([" "]));//0
//string
console.log(String(null));
console.log(String(undefined));
//perse
console.log(parseFloat(3.14));
console.log(parseInt(3.14));
//boolean 
//false=> nan,undefined," ",0,null
//conditional statments
// function dice(){
//     let a = parseInt(Math.random()*6);
//     if(a>0 && a<6){
//         return console.log(`move forward by ${a}`);
//     }
// }
let dice = 6
// if(!Number(dice)){
//     return console.log(`only number allowed not this "${dice}"`);
// }else if(dice >0 && dice <= 6){
//     return console.log(`move forward by ${dice}`);
// }else{
//     return console.log("number between 0 to 6 only");
// }
switch(dice){
    case 1 :
    console.log(`move forward by ${dice}`);
    break;
    case 2 :
    console.log(`move forward by ${dice}`);
    break;
    case 3 :
    console.log(`move forward by ${dice}`);
    break;
    case 4 :
    console.log(`move forward by ${dice}`);
    break;
    case 5 :
    console.log(`move forward by ${dice}`);
    break;
    case 6 :
    console.log(`move forward by ${dice}`);
    break;
    default :
    console.log("try again");
}
//loops
let aga1 = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 1; i<= aga.length;i++){
//     console.log(i);
// }
let i = aga1.length
// while(i <= aga1.length){
//     console.log(i);
//     i++
// }
// do{
//     console.log(i);
//     i--
// }while(i>0)
//for of
let ana = "mitesh"
for(const w of ana){
    console.log(w);
}
let gg = {
    1 :"one",
    2 : "two",
    3 : "three"
}
for(const k in gg){
    console.log(gg[k] + " on " + k);
}

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numberToCheck = 129; // Replace this with any number you want to check
  const result = isPrime(numberToCheck);
  
  if (result) {
    console.log(`${numberToCheck} is a prime number.`);
  } else {
    console.log(`${numberToCheck} is not a prime number.`);
  }

//let arrow function
let ab = (a,b)=>{
    return console.log(a + b);
}
ab(10,5)
