//variable in javascript
//let once initialized can be updated or can be undeifined
let av = 100
av = 10
console.log(av);
//const once initialized must be declared once declard can't be updated
const vc = 100
console.log(vc);

//data type
//primitives :- which contain actual value
//number
let an = 1
console.log(an);
//string
// let String = "string"
// console.log(String);
//boolean
let Boolean = true
console.log(Boolean);
//null
let NuLL = null
console.log(NuLL);
//undefined
let un 
console.log(un);
//symbol
const Sym = Symbol("foo");
console.log(typeof Sym);
//non primitives : collection of data type
//object
let person = {
    p1 :{
        "name" : "mitesh1",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p2 :{
        "name" : "mitesh2",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p3 :{
        "name" : "mitesh3",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p4 :{
        "name" : "mitesh4",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p5 :{
        "name" : "mitesh5",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
}
console.log(person.p5.age[1]);
//array
let ArrA = [0,1,2,3,4,5,6,7,8,9,{
    p1 :{
        "name" : "mitesh1",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p2 :{
        "name" : "mitesh2",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p3 :{
        "name" : "mitesh3",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p4 :{
        "name" : "mitesh4",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    },
    p5 :{
        "name" : "mitesh5",
        "cLass" : "MCA 2 sem",
        "age" : [21,22,23]
    }
}]
console.log(ArrA[10].p5.age[1]);
//operators
//assigining =
//+-/*++--%
//conditional operator :- gives true or false
// ===,!==,>=,<=,>,<,==
//logical operator
//&& ||
//string operator
console.log("mitesh" + " chaudhary");
console.log("mitesh" + 100);
console.log("mitesh" + null);
console.log("mitesh" + undefined);
console.log("mitesh" + false);
console.log("mitesh" + true);

console.log("2" + "2");//4
console.log("2" - "2");//0
console.log(2 + "2");//22
console.log(2 - - "2");//4
console.log(2 + + "2");//4
//ternary operator
let data = false
let check = data === true ? "yes got it" : "no it false"
console.log(check);
let num = 100
let check_2 = num % 2 === 0 ? "even " + num : "odd " + num
console.log(check_2);

//typeof conversion
console.log(10 - "String");//nan
console.log(10 - undefined);//nan
console.log(10 - true);//9
console.log(10 - false);//10
console.log(10 - null);//10
console.log(10 - "10");//0
console.log(10 - {});//nan
console.log(10 - " ");//10
console.log(10 - []);//10

//number conversion
console.log(Number("string"));//nan
console.log(Number(" "));//0
console.log(Number([]));//0
console.log(Number({}));//nan
console.log(Number(null));//0
console.log(Number(undefined));//nan
console.log(Number(true));//1
console.log(Number(false));//0

//converson to string
console.log(String(null));
console.log(String(undefined));
//boolean 
//false :- " ",Nan,0,undefined,null


//conditional statment
let dice = 6
// if(!Number(dice)){
//      console.log(`${dice} is not number`);
// }else if(dice > 0 && dice < 7){
//      console.log(`move forward by ${dice}`);
// }else{
//     return console.log(`${dice} is not number between 1 to 6`);
// }

//switch statment
switch(dice){
    case 1 :
    console.log(`move forward by ${dice}`);
    break
    case 2 :
    console.log(`move forward by ${dice}`);
    break
    case 3 :
    console.log(`move forward by ${dice}`);
    break
    case 4 :
        console.log(`move forward by ${dice}`);
        break
        case 5 :
            console.log(`move forward by ${dice}`);
            break
            case 6 :
                console.log(`move forward by ${dice}`);
                break
                default :
                console.log("try again");
}
//loops
//for loop
let ArrA2 = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 1 ; i <= ArrA2.length;i++){
//     console.log(ArrA2[i]);
//}

let i = ArrA2.length
// while(i <= ArrA2.length){
//     console.log(i);
//     i++
// }

do{
    console.log(i);
    i--
}while(i > 0)

//for of loops
let ggg = "mitesh"
for(const i of ggg){
    console.log(i );
}

//for in 
let pep = {
    1 : "one",
    2 : "two",
    3 : "three"
}
for(const key in pep){
    console.log(pep[key] + " on " + key);
}

//function
function isPrime(n){
    if(n <= 1)
    return false;

    for( let i = 2; i <= Math.sqrt(n);i++){
      if(n % i === 0)
      return false;
    }

    return true;
}

let result = isPrime(100)
if(result){
    console.log(`number is prime`);
}else{
    console.log(`number is not prime`);
}

let math = Math.sqrt(100)
console.log(math);

//arrow function
let iseven = (a) =>{
  let checkit = a % 2 === 0 ? true : false
  return checkit
}
let g20 = iseven(15)
console.log(g20);

//scope
globalThis.name1 = "mitesh"
if(true){
    name2 = "avish"
    console.log(name2 + name1);
}

function printit(){
  name3 = "vasu"
  console.log(name3 + name1);
}
printit()



