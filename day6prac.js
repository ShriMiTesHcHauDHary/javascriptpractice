//variable are the name of memory unit in with data are stored
//ex:-let and const
let a = 100
a=10
console.log(a)
const b = undefined
// b= null can't be re declareed  in const
console.log(b)

//data types
//string
let c = "mitesh"
console.log(c)
console.log("mitesh")
//number
let d = 15
console.log(d)
console.log(15)
//boolean
let isprimeno = true
let isnewuser = false
console.log(isnewuser)
console.log(isnewuser)
console.log(true)
//undefined
let f = undefined
console.log(f)
console.log(undefined)
//null
let g = null
console.log(g)
console.log(null)
//object
let person= {
    name : "mitesh",
    class : "22",
    rollno : 2 
}
let person1= {
    name : "mitesh1",
    class : "22",
    rollno : 2 
}
let person2= {
    name : "mitesh2",
    class : "22",
    rollno : 2 
}
let person3= {
    name : "mitesh3",
    class : "22",
    rollno : 2 
}
let college ={
    person :person,
    person1 :person1,
    person2 :person2,
    person3:person3,
}
console.log(college)

//ternary operators
let num = 11
let iseven = num % 2 === 0 ? "is even":"is odd"
console.log(iseven)

//type of conversion
console.log("s" + "m")//sm
console.log(4 - 5)//-1
console.log("s" - "m")//nan
console.log(true - null)//1
console.log(false - undefined)//nan
//console.log(fals - heee)//nan this ws undefined

//explicit method
console.log(Number("hhhh"))//nan
console.log(Number(2))//2
console.log(Number(" "))//0
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number(undefined))//nan
console.log(Number(null))//0

const a1 =parseFloat(5.111)
console.log(a1)

//string
console.log(String("hhhh"))//hhh
console.log(String(2))//2
console.log(String(" "))//nothing
console.log(String(true))//true
console.log(String(false))//false
// console.log((undefined).toString())//undefined
// console.log((null).toString())//null

//boolean
//null,undefined,0," ",nan === false baki sab true

//conditional statments
let num1 = 0
if(num1 === 0){
    console.log("0")
}else if(num1 === 1){
    console.log("1")
}else{
    console.log("patani")
}

let dice = 5

switch (dice){
    case 1 :
        console.log("move 1 forward" + dice)
        break
        case 2 :
        console.log("move 2 forward" + dice)
        break
        case 3 :
        console.log("move 3 forward" + dice)
        break
        case 4 :
        console.log("move 4 forward" + dice)
        break
        case 5 :
        console.log("move 5 forward" + dice)
        break
        case 6:
        console.log("move 6 forward" + dice)
        break
        default :
        console.log("turn again")
}

//loops
 //for loop
 for(let i = 0; i<10;++i){
    let a = i % 2 === 0 ? "no is even" + i : "no is odd" + i
    console.log(a)
 }

 //for of

 let array1 =[1,2,3,4,5,6,7,8,9,10]

 for(const num of array1){
    console.log(String(num))
 }

//while loop
// let a3 = 10
// while (a3 <=20){
//     console.log("no is " + a3)
//     ++a3
// }

//dp while loops
 let a4 = 10
while(a4 < 10 && a4 > 0){

    console.log(a4)

    --a4
}

//function

function primeno(n){ //prime no :- if no divided by any no smaller then him
    if (n <=1)
    return false + "no is not prime" + n;

    for (let i=2 ; i<n;i++){
    if(n% i ==0)
    return false + "no is not prime" + n;
    }
    return true + "no is prime" + n;
   

    
}

const no = primeno(6)
console.log(no)

//arrow function
const arrowadd = (a,b) => a + b
const g1 = arrowadd(2,3)
console.log(g1)

console.log(4 % 2)