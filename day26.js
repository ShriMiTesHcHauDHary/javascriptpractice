//variable
//let:- let keyword can be initialized and updated later on
let al = 100
al = 10
console.log(al);
//const :- once initialized must be declared once declared can't be updated
const ac = 100
console.log(ac);
//data types
//primitives:- actual values
console.log("string");
console.log(100);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

//non primitives:-collection of data types
let pep = {
    p1:{
        name :"mitesh1",
        class :"MCA",
        age :22
    },
    p2:{
        name :"mitesh1",
        class :"MCA",
        age :22
    },
    p3:{
        name :"mitesh3",
        class :"MCA",
        age :22
    },
    p4:{
        name :"mitesh4",
        class :"MCA",
        age :22
    },
    p5:{
        name :"mitesh5",
        class :"MCA",
        age :[21,22,23]
    },
}
console.log(pep.p5.age[1]);

//array
let ada = [0, {
    p1:{
        name :"mitesh1",
        class :"MCA",
        age :22
    },
    p2:{
        name :"mitesh1",
        class :"MCA",
        age :22
    },
    p3:{
        name :"mitesh3",
        class :"MCA",
        age :22
    },
    p4:{
        name :"mitesh4",
        class :"MCA",
        age :22
    },
    p5:{
        name :"mitesh5",
        class :"MCA",
        age :[21,22,23]
    },
},2,3,4,5,6]

console.log(ada[1].p5.age[1]);

//operator
//string operator
console.log("3"+ "3");//33
console.log("3"- "3");//0
console.log(3+ "3");//33
console.log(3- "3");//0
console.log(3 + + "3");//6
console.log(3 - - "3");//6

//ternary operator
let check =10 % 2 ===0? "iseven" : " not even"
console.log(check);

//types of conversion
//implicit
console.log("10" - "10");//0
console.log("10" - 10);//0
console.log("10" - " ");//10
console.log("10" - []);//10
console.log("10" - {});//nan
console.log("10" - null);//10
console.log("10" - false);//10
console.log("10" - true);//9
console.log("10" - "true");//nan
console.log("10" - "mitesh");//nan
console.log("10" - undefined);//nan

//explicit conversion
console.log(Number(null));
console.log(parseFloat(5.56));
console.log(parseInt(5.56));
//string conversion
console.log(String(null));

//conditional operators
let dice = 1
// if(!Number(dice)){
//     return console.log("must be number not " + dice);
// }else if(dice < 0 || dice > 6){
//     return console.log("must be between 1 to 6 not " + dice);
// }else{
//  console.log(`move forward by ${dice}`);
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
// for(let i=1;i<=100;i++){
//     console.log(i);
// }
let arra = [1,2,3,4,5,6,7,8,9,10]
let i = arra.length
// while(i > 0){
//     console.log(i);
//     i--
// }

do{
    console.log(i);
    i--
}while(i>0)

//for of loop
let al1 ="mitesh"
for(const w of al1){
    console.log(al1[w] + " on " + w );

}

let obj = {1 : "one",2 : "two",3 :"three",4 : "four",5:"five"}
for(const key in obj){
    console.log(obj[key] + " on " + key);
}

//function 

function isprime(n){
    if(n <= 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n);i++){
        if(n % 2 === 0){
            console.log(`number is not prime ${n}` + false);
        }
        return console.log(true + `${n} is prime`);

    }
}

isprime(127)

let iseven = (n)=>{
let check = n% 2 ===0? "iseven "+ n : "isodd " + n
return check
}
let gg = iseven(10)
console.log(gg);
