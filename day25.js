//variable
//let:-once initialted output will be undefined and once declared can be redeclared
let lx = 100
lxx=10
console.log(lxx);
//const:-once initiated must be declared once declared can't be updated
const cx = 100
// cx = 10
console.log(cx);

//data type
//primitives :- once with actual value
//string
let xs ="mitesh"
console.log("mitesh");
//number
let xn = 100
console.log(xn);
//boolean
let xb = true
console.log(xb);
//null
console.log(null);
//undefined
let vc 
console.log(vc);

//non primitives: collection of data types
//objects
let person = {
    p1:{
        namee : "mitesh",
        class : "MCA",
        age : [21,22,23]
    },
    p2:{
        namee : "mitesh",
        class : "MCA",
        age : [21,22,23]
    },
    p3:{
        namee : "mitesh",
        class : "MCA",
        age : [21,22,23]
    },
    p4:{
        namee : "mitesh",
        class : "MCA",
        age : [21,22,23]
    }
}
console.log(person.p1.age[1]);
//array
let araa = [1,{ p1:{
    namee : "mitesh",
    class : "MCA",
    age : [21,22,23]
},
p2:{
    namee : "mitesh",
    class : "MCA",
    age : [21,22,23]
},
p3:{
    namee : "mitesh",
    class : "MCA",
    age : [21,22,23]
},
p4:{
    namee : "mitesh",
    class : "MCA",
    age : [21,22,23]
}},3,4,5,6]
console.log(araa[1].p1.age[1]);

//operators
//+-/*%++--
//comparision operator
//==(value),===(value and data type),!==,>,>=,<=
//logical operators
//&&,||

//string operator
console.log("3"+3);//33
//tenary operator
let num = 100
let check = num %2 ===0 ? "iseven" : "isodd"
console.log(check);
//solve
console.log("3"+ "3");//33
console.log("3"- "3");//0
console.log(3+ "3");//33
console.log(3- "3");//0
console.log(3 + + "3");//6
console.log(3 - - "3");//6
// let g = 3--
// console.log(g);
//type of conversion
//implicit conversion
console.log(5-"3");//2
console.log("5"-"3");//2
console.log("5"-"three");//nan
console.log("5"-undefined);//nan
console.log("5"-null);//5
console.log("5"-true);//4
console.log("5"-false);//5
console.log("5"-" ");//5
console.log("5"-{});//nan
console.log("5"-[]);//5

//number
console.log(Number(3));
console.log(Number("3"));
console.log(Number("thr"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number([]));
console.log(Number(" "));
console.log(Number({}));

//int parse
console.log(parseInt(5.14));
console.log(parseFloat(5.14));

//sting explicit conversion
console.log(toString(33));

//boolean conversion
//null," ",undefined,0,nan

//conditional stataement
let dice =1
// if(!Number(dice)){
//     return console.log("enter number please");
// }else if(dice <=0 || dice >6){
//     return console.log(`${dice} is not between 1 and 6`);
// }else{
//     console.log(`move forward by ${dice}`);
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

// for(let i =10;i>=0;i--){
//     console.log(`iteration this time is ${i}`);
// }

let arra = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0;i<arra.length;i++){
//     console.log(`iteration this time is ${i}`);
// }
let i = 0
// while(i<arra.length){
    //     i++
    // }
    
//     do{
        
//      console.log(`iteration this time is ${i}`);
//      i++
// }while(i<=arra.length)


let strr = "mitesh"
for(const w of strr){
    console.log(w);
}

for(const a of arra){
    console.log(a);
}

let pwp ={
    "one" : 1,
    "two" : 2,
    "three" : 3
}
for(const key in pwp){
    console.log(pwp[key]+" on " + key);
}
//key === key,pwp === value

// function
// function isprime(n){
//     if(n <=1){
//         return console.log(`${n} is not prime`);
//     }

//     for(let i = 2; i < n;i++){
//         let check = n%i===0 ? ` is not prime` + n : ` is prime` + n
//         return console.log(check);

//     }
// }

// isprime(129)
// function ispime(n){
//     if(n <= 1){
//         return console.log("not prime " + n);
//     }

//     for(let i = 2 ; i < n; i++){
//       if(n % i === 0){
//         return console.log("not prime" + n);
//       }
//       return console.log("is prime" + n);
//     }
// }
// ispime(129)
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
  
  const numberToCheck = 11; // Replace this with any number you want to check
  const result = isPrime(numberToCheck);
  
  if (result) {
    console.log(`${numberToCheck} is a prime number.`);
  } else {
    console.log(`${numberToCheck} is not a prime number.`);
  }

  let number = 129
  let sroot = Math.floor(Math.sqrt(number))
  console.log(sroot);

  //arrow function
let iseven = (n) =>{
    let check = n % 2 ===0 ? "is even " + n : "not even " + n
    return check
}
let g = iseven(10)
console.log(g);

//scope
globalThis.name2 = "VASU"
globalThis.name1 = "mitesh"
if(true){
    let name2 = "avish"
    console.log(name2);
    console.log(name1);
}
console.log(name2);
