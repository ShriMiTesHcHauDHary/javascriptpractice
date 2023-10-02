//variable
//let key can be update even after initialization 
 let al=100
// al = 200
console.log(al);

//const :- once initialize can't be redaclared once declared can't be updated

const ac = 100
// ac = 700
console.log(ac);

//data types
//primitives
let as = Symbol('h')
console.log("mitesh")
console.log(22)
console.log(true)
console.log(null)
console.log(undefined)
console.log(as)

//non-primitive
let person={
    person1 :{
        name :"mitesh",
        age :22,
        date : [16,6,2023]
    },
    person2 :{
        name :"avish",
        age :18,
        date : [16,6,2023]
    },

person3 :{
    name :"laddu",
    age :25,
    date : [16,6,2023]
},

person4 :{
    name :"shxxn",
    age :22,
    date : [16,6,2023]
}
}
console.log(person.person1.date[0])
console.log(person.person2.name)

//array
let ala = [{
    name :"mitesh",
    age :22,
    date : [16,6,2023]
},{
    name :"avish",
    age :18,
    date : [16,6,2023]
},3,4,5,6,7,8,9,{
    name :"laddu",
    age :25,
    date : [16,6,2023]
}]

console.log(ala[0].date[2]);
console.log(ala[9].name);

//operators
//+-*/%++i,--i
// ===,==,!==,<=,>=,
//||&&

//sring operators

console.log("mitesh" + 22)//mitesh22
console.log("mitesh" + null)
console.log("mitesh" + undefined)
console.log("mitesh" + true)
console.log("mitesh" + false)
console.log("mitesh" + {})
console.log("mitesh" + ["1"])//don't show an array only data type you stored in it to concatination

//ternary operators
let n = 10
let even = n % 2 ===0 ? "is even " + n : "is not even " + n
console.log("mitesh" + "answer is " + even);

//types of conversion
console.log("mitesh" - "mitesh")
console.log(10 - false)
console.log(10 - true)
console.log(10 - null)
console.log(10 - undefined)

//number
console.log(Number("m"));//nan
console.log(Number(10));//10
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//nan
console.log(Number({}));//nan
console.log(Number([]));//0
console.log(Number(" "));//0

//string
console.log(String(10))
console.log(String(true))
console.log(String(false))
console.log(String(null))
console.log(String(undefined))
console.log(String({}))
console.log(String([]))

//conditional operator
let an = 10
let on = "%"
let an2 = 20
if(on == "*"){
    console.log(an * an2)
}
if(on == "-"){
    console.log(an - an2)
}
if(on == "/"){
    console.log(an / an2)
}
if(on == "+"){
    console.log(an + an2)
}
if(on == "%"){
    console.log(an % an2)

}

console.log(10 % 20)

switch(on){
    case '*':
        console.log(an * an2);
        break
        case '+':
        console.log(an + an2);
        break
        case '-':
        console.log(an - an2);
        break
        case '/':
        console.log(an / an2);
        break
        case '%':
        console.log(an % an2);
        break
        default :
        console.log("error");
}

//loops
let ara = [1,2,3,4,5,5,6,7,8,9,10]
// for(let i = 0 ; i < ara.length;i++){
//     console.log(i)
// }

//while
// let i = 0
// while(i<ara.length){
//     console.log(i)
//     ++i
// }
//
let i = 0
do{
    console.log(i)

    ++i
}while(i > 0 && i < ara.length)

for(let num of ara){
    console.log(num)
}

//function
function isprime(n){
 if(n <= 1){
    console.log("num is less than 1") 
    
 }


for( let i = 2 ; i < n ; i++){
    if(n % i === 0){
        console.log(n + " not prime");
        break
    }else{
        return console.log(n + " is prime")
    }
}
    
}
isprime(1)

//arrow function 
let iseven = (a) => {
    let check = a % 2 ===0 ? a + " is even" : a + " not even"
    return check
}

console.log(iseven(10));

//scope
let gg = "mitesh"
if(true){
    console.log(gg);
}

