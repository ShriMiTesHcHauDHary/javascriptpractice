//variable
//let :- once declared can be updated
let al = 100
al = 10
console.log(al);
//const :- once declared can't be updated once initilised must be declared
const ac = 100
console.log(ac);

//data types
//primitives:- contain actual value 
//string
let as = "string"
console.log(as);
//number
console.log(100);
//undifined
let au = null
console.log(au);
//non primitives :-collection of data types
let person={
    p1:{
        name :"mitesh",
        class :"MCA3",
        age :[21,22,23]
    },
    p2:{
        name :"mitesh2",
        class :"MCA3",
        age :[21,22,23]
    },
    p3:{
        name :"mitesh3",
        class :"MCA3",
        age :[21,22,23]
    },
    p4:{
        name :"mitesh4",
        class :"MCA3",
        age :[21,22,23]
    }
}
console.log(person.p4.age[1]);
//array
let arrayt = [0,1,{
    p1:{
        name :"mitesh",
        class :"MCA3",
        age :[21,22,23]
    },
    p2:{
        name :"mitesh2",
        class :"MCA3",
        age :[21,22,23]
    },
    p3:{
        name :"mitesh3",
        class :"MCA3",
        age :[21,22,23]
    },
    p4:{
        name :"mitesh4",
        class :"MCA3",
        age :[21,22,23]
    }
},3,4,5,6,7,8,9,10]
console.log(arrayt[2].p4.age[1]);
//operators
//assigment assignedto = value what to be assigned
//arch +-?*%++--
//comparsiomn operator ===,==,!==,<=,>=,<,>
//logial && ||
//string concati
console.log(4+"4");//string priority
console.log(4 + +"4");
console.log(4 - -"4");
//ternary oprator
let num1 =10
let check= num1 > 2 ? true : false 
console.log(check);

//types of conversion
console.log(10 - "3");//7
console.log(10 - "mitesh");//nan
console.log(10 - " ");//10
console.log(10 - [ ]);//10
console.log(10 - { });//nan
console.log(10 - null);//10
console.log(10 - true);//9
console.log(10 - undefined);//nan
console.log(10 - false);//10

//number sonverin
console.log(Number("s"));//nan
console.log(Number(" "));//0
console.log(Number([ ]));//0
console.log(Number({ }));//object nan
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(true));//1

console.log(parseInt(3.14));

//string
console.log(String(null));

//boolean
//false => " ",nan,0,undefined,null

//conditional statment
let dice = 1
// if(!Number(dice)){
//     return console.log(`${dice} is nan`);
// }else if(dice > 0 && dice <=6){
//     console.log(`move forard by ${dice}`);
// }else{
//     console.log("try again");
// }
switch(dice){
    case 1 :
    console.log(`${dice} move forward`);
    break;
    case 2 :
    console.log(`${dice} move forward`);
    break;
    case 3 :
    console.log(`${dice} move forward`);
    break;
    case 4 :
    console.log(`${dice} move forward`);
    break;
    case 5 :
    console.log(`${dice} move forward`);
    break;
    case 6 :
    console.log(`${dice} move forward`);
    break;
    default :
    console.log(`try again`);
}

//loops
//for loop
for(let i = 0 ;i < arrayt.length;i++){
    console.log(i);
}

let i = arrayt.length
// while(i <arrayt.length){
//     console.log(i);
//     i++
// }

do{
    console.log(i);
    --i
}while(i >= 0 && i < arrayt.length)

//for in loop array and string
let ast = "mitesh"
for(const i in ast){
    console.log(ast[i] + " on " + i);
}

for(const i of arrayt){
    console.log(arrayt[i] + " on " + i);
}

//forof loop for obj
// let hih = {
//     1:"one",
//     2:"sec",
//     3:"third",
//     4:"four",
// }
// for(const key in hih){
//     console.log(hih[key] + " on " + key);
// }

//function
function isPrime(n){
    if(n <= 1)
    return false

    for(let i = 2 ; i < Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
        return true
    }

}
console.log(isPrime(2000));

//arrow function
// let num2 = 10
// let check2 = (num2)=>{
//     let hh = num2 % 2 === 0 ? "even" : "odd"
//     return hh

// }
// console.log(check2());
let check2 = 10 % 2 === 0 ? "even" :"odd"
console.log(check2);

//scope
globalThis.naam1 = "mitesh"
if(true){
    let naam2 = "avish"
    console.log(naam2);
    console.log(naam1);
}

function peep(){
    let naam3 = "vasu"
    console.log(naam3); 
    console.log(naam1); 
}
peep()
