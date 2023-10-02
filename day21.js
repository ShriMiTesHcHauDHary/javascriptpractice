//VARIABLE
let al = 100

console.log(al)
//const :- once initialized must be declared once decalared can't be re declared
const ac = 100
console.log(ac);

//dat ypes
//primitives:-actual value
//string
console.log("string")
console.log(100)
console.log(true)
console.log(false)
console.log(undefined)
console.log(null)

//non primitives
let peo={
    p1 :{
        name :"mitesh",
        age :[21,22,23]
    },
    p2 :{
        name :"mitesh2",
        age :[21,22,23]
    },
    p3 :{
        name :"mitesh3",
        age :[21,22,23]
    },
    p4 :{
        name :"mitesh4",
        age :[21,22,23]
    },
}

console.log(peo.p1.age[0]);
//array
let ara = [{
    p1 :{
        name :"mitesh",
        age :[21,22,23]
    },
    p2 :{
        name :"mitesh2",
        age :[21,22,23]
    },
    p3 :{
        name :"mitesh3",
        age :[21,22,23]
    },
    p4 :{
        name :"mitesh4",
        age :[21,22,23]
    },
},2,3,4,5]

console.log(ara[0].p1.age[1]);

//operators
//string
console.log("mitesh" + null);
console.log("mitesh" + undefined);
console.log("mitesh" + true);
console.log("mitesh" + false);
console.log("mitesh" + []);

//ternary operators
let num = 20
let iseven = num % 2 ===0 ? "is even " + num : "is odd " + num
console.log(iseven);

//types of conversion
//nan:-un,string
console.log("10" - 1);
console.log("10" - "10");
console.log(10 - []);
console.log(10 - {});

//explicitly
console.log(Number());
//string
console.log(String({}));

//conditional operators
dice = 1
// if(isNaN(dice)){
//     console.log(`dice can't be ${dice}`);
// }else if(dice <= 0 || dice > 6){
//     return console.log(`dice can only between 1 - 6`);
// }else{
//     console.log(`move forward by ${dice}`);
// }
switch(dice){
    case 1 :
        console.log("move forward by" + dice);
        break
        case 2 :
        console.log("move forward by" + dice);
        break
        case 3 :
        console.log("move forward by" + dice);
        break
        case 4 :
        console.log("move forward by" + dice);
        break
        case 5 :
        console.log("move forward by" + dice);
        break
        case 6 :
        console.log("move forward by" + dice);
        break
        default :
        console.log("error try again");
}

//loops
let ala = [1,2,3,4,5,6,7,8,9,10]

for(let i = 1 ; i <= ala.length ; i++){
    console.log( "for" + i);
}

// let i = 0 
// while(i <= ala.length){
//     console.log("while " +  i);

//     ++i
// }
let i = ala.length
do{
    console.log("do " + i);
    --i
}while(i > 0)

for(const n of ala){
    console.log(n);
}
//for in loop it invokde keys and values on keys
let hh = { 1 : "one", 2 : "two", 3 :"three", 4 :"four"}
for(const n in hh){
    console.log(hh[n] + " on " + n);
}

for(const n in ala){
    console.log(ala[n] + " on " + n);
}


let str = "mitesh"
for(const w in str){
    console.log(str[w] + " on " + w );
}

//function 
function isprime(n){
    if(n <= 1){
        return console.log("not prim " + n);
    }
        for(let i = 2; i < n ; i++){
            let check = n % i ===0 ? "not prime " + n : "is prime " + n
            return console.log(check);
        }
    
}

isprime(120)

let iodd = (a) =>{
    let check = a % 2 ===0 ? "not odd " + a : "is odd " + a
    console.log(check);
}

iodd(7)

//scope
globalThis.myAge = 22
if(true){
    let name = "mitesh"
    console.log(name);
    console.log(myAge );
}
