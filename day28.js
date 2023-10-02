//variable
//let once declared can be updated 
let a = 100
a= 10
console.log(a);

//const = once initialised must be declared once declared can't be updated
const ab= 10

console.log(ab);

//data types
//primitives :- with atual values
//number
console.log(100);
//string
console.log("mitesh");
//boolean
console.log(true);
//null
console.log(null);
//undefined
let ag
console.log(ag);

//non primitives
let person ={
    p1:{
        name : "mitesh",
        class : "MCA",
        age : 22
    },
    p1:{
        name : "mitesh1",
        class : "MCA",
        age : 22
    },
    p2:{
        name : "mitesh2",
        class : "MCA",
        age : 22
    },
    p3:{
        name : "mitesh3",
        class : "MCA",
        age : 22
    },
    p4:{
        name : "mitesh4",
        class : "MCA",
        age : [21,22,23]
    }
}
console.log(person.p4.age[1]);
//array
let arra = [0,{
    p1:{
        name : "mitesh",
        class : "MCA",
        age : 22
    },
    p1:{
        name : "mitesh1",
        class : "MCA",
        age : 22
    },
    p2:{
        name : "mitesh2",
        class : "MCA",
        age : 22
    },
    p3:{
        name : "mitesh3",
        class : "MCA",
        age : 22
    },
    p4:{
        name : "mitesh4",
        class : "MCA",
        age : [21,22,23]
    }
},2,3,4,5,6,7,8,9,10]
console.log(arra[1].p4.age[1]);
//operators
//=,+-/*%++--
//conditional operator
//==,===,!==,>=,<=,>,<
console.log("3" === 3);
//logical operator
//&&,||

//string operator
console.log("string" + true);
//ternary operator
const iseven = 10 % 2 === 0 ? "even" : "odd"
console.log(iseven);

//types of conversion
console.log(10 - 3);//7
console.log(10 - true);//9
console.log(10 - null);//10
console.log(10 - undefined);//nan
console.log(10 - "3");//7
console.log(10 - "string");//nan
console.log(10 - false);//10
console.log(10 - []);//10
console.log(10 - {});//nan
console.log(10 - " ");//10

//number comversion
console.log(Number("300"));//300
console.log(Number(true));//1
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(undefined));//nan
console.log(Number([]));//0
console.log(Number({}));//nan
console.log(Number(" "));//0
//parseint
console.log(parseInt(3.14));
console.log(parseFloat(3.14));

//string conversion
console.log(String(null));
console.log(String(undefined));
//boolean
//false = 0," ",nan,null,undefined else everything is true

//condtitional statement
let dice = 3
// if(!Number(dice)){
//      console.log(`${dice} is not a number`);
// }else if(dice <= 6 && dice > 0){
//     return console.log(`move forward by ${dice}`);
// }else{
//     console.log(`${dice} must be between 1 to 6`);
// }

//switch statement
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
    console.log(`try again`);
}

//loops
let ara = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 1;i <= ara.length;i++){
//     console.log(i);
// }

let i = 1
// while(i < ara.length){
//     console.log(i);
//     i++
// }
do{
console.log(i);
i++
}while(i > 1 && i <= ara.length)

//for of loops
let str = "mitesh"
for(const i of ara){
    console.log( i);
}
for(const i of str){
    console.log( i);
}

//for in loop best for object
for(const key in person){
    console.log(key[person] + " on " + key);
}



//function
function isprime(n){
    if(n <= 1){
        return false
    }

    for( i = 2 ; i <= Math.sqrt(n);i++){
        if(n % i === 0){
          return false
    }
}
 return true 
}

console.log(isprime(131));


let ahh = Math.sqrt(4)
console.log(ahh);

//arrow function
let agg = (a,b) => {
    return a + b
}
console.log(agg(1,2));

//scope
globalThis.naam2 = "avish"
if(true){
    let naam = "mitesh"

    console.log(naam2);
    console.log(naam);
}

function pp(){
    let naam = "vasu"
    console.log(naam2);
    console.log(naam);
}
pp(
    
)
console.log(String(null));