//variable
let al = 10
// al= 8
console.log(al);

//const : - once initialise must be declard once declared can't be updated
const ac = 10
// ac = 9
console.log(ac);

//data type
//string
let as = "mitesh"
console.log(as)
console.log("avsh")

//number 
let an = 10
console.log(an)
console.log(11)

//boolean
let ab = true
console.log(ab)
console.log(false)

//null
let au = null
console.log(au)

//unidentified

let ad 
console.log(ad)

//non primitives
let person = {
    p1 :{
        name :"mitesh",
        class : "mca",
        age :22
    },
    p2 :{
        name :"mitesh",
        class : "mca",
        age :22
    },
    p3 :{
        name :"mitesh",
        class : "mca",
        age :22
    }
}

console.log(person.p1.age);

//array
let ara = [{
    
        p1 :{
            name :"mitesh",
            class : "mca",
            age :22
        },
        p2 :{
            name :"mitesh",
            class : "mca",
            age :22
        },
        p3 :{
            name :"mitesh",
            class : "mca",
            age :22
        }
    },13,14
]
console.log(ara[0].p1.name);

//operators
console.log("a" + undefined)
console.log("a" + null)
console.log("a" + 10)
// console.log("a" + hh)

//trnary operators
let num = 10
let add = num % 2 === 0 ? true : false

console.log(add);

//types of conversion
console.log(Number(" "));

//conditional statments
// let dice = 0
// switch(dice){
//     case 1 :
//         console.log(`${dice}` + " step forword")
//         break;
//         case 2 :
//         console.log(`${dice}` + " step forword")
//         break;
//         case 3 :
//         console.log(`${dice}` + " step forword")
//         break;
//         case 4 :
//         console.log(`${dice}` + " step forword")
//         break;
//         case 5 :
//         console.log(`${dice}` + " step forword")
//         break;
//         case 6 :
//         console.log(`${dice}` + " step forword")
//         break;
//         default :
//         console.log("role again");
// }

let dice = 6
if(dice <= 0){
    console.log("wrong input")
}else if(dice > 6){
    console.log("wrong input more then 6")
}else{
    console.log( "move forward by " + dice)
}

//loops
let asa =[1,2,3,4,5,6,7,8,9,10]
for(let i = 0;i<=asa.length;i++){
    console.log("iteration this time is " + i);
}

//while
let i = 0
// while(i<=asa.length){
//     console.log("iteration this time is " + i)

//     ++i
// }
//do while
do{
    console.log("iteration this time is " + i);

    ++i
}while(i > 0 && i <=asa.length )

for(let nu of asa){
    console.log(nu);
}

//function
function isprime(n){
    if(n <=1)
    return console.log( n + " is not prime")

    for( let i = 2 ; i < n; i ++){
        if(n % i === 0){
            return console.log(n + " is not prime");
        }
        return console.log(n + " is prime");
    }
}

isprime(1)

//arrow function
let iseven = (n) =>{
    let a = n % 2 === 0 ? "is even" : "is odd"
    console.log(a);
    }

iseven(10)
