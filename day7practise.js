//variable
let a = 5 
let b = 6
a = 8
b = 7
console.log(a)
console.log(b)

const x = undefined
// x = null
console.log(x)

//data types
let s = null
console.log(s)

//object 
let fan = {
    philips : "hawals",
    usha : "gg",
    digital :"dhoni"
}

const allfan= {
    alfan : fan,
    philips : "hawals",
    usha : "gg",
    digital :"dhoni"
}
console.log(allfan)

//types if convertsion
//implicit value
console.log("l" + "l");//ab
console.log("4" - "6");//-2
console.log("gg" * "hh");//nan
console.log(undefined / null);//nan
console.log(true - false);//1
console.log(" " + null);//1

//explicit
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number(undefined))//naa
console.log(Number("string"))//nan
console.log(Number(null))//0

console.log(String(null))

//conditonal statement
dice = 1
switch(dice){
        case 1 :
        console.log("move forward by " + dice)
        break
        case 2 :
        console.log("move forward by " + dice)
        break
        case 3 :
        console.log("move forward by " + dice)
        break
        case 4 :
        console.log("move forward by " + dice)
        break
        case 5 :
        console.log("move forward by " + dice)
        break
        case 6 :
        console.log("move forward by " + dice)
        break
        default :
        console.log("role dice again")
}

//loops
for(let i = 0;i<=10;i++){
    console.log("iterstion this time is " + i)
}

let f = 0
while(f <=5){
    console.log("iterstion this time is" + f)

    ++f
}

let j = 10
do{
    console.log("itterstion this time is " + j)

    --j
}while(j > 0 && j<=10)

let thisarray = [1,2,3,4,5,6,7,8,9,10]
for(const num of thisarray){
    console.log("iteration this time is " + num)
}


//arrow function

let multiplythis = (a,b) => a*b
const a1 = multiplythis(12,24)
console.log(a1)

//function 

function isprime(n){
    if(n<=1){
        return console.log('not prime enumber');

    }
    for(let i = 2;i <n; i++){
        if(n % i === 0){
              return console.log("not prime" + n)
        }
    }
    return console.log("is prime" + n)
}

console.log(isprime(3))




