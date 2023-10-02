let a = 5 
let b = 15
a = 25
console.log(a)
console.log(b)

const c = 10

const naamismitesh = true
console.log(naamismitesh)
console.log(false)

let d = null
console.log(d)

const classes = {
    naam :"mitesh",
    class : "mca",
    age :22
}
const classes1 = {
    naam :"mitesh1",
    class : "mca",
    age :22
}
const classes2 = {
    naam :"mitesh2",
    class : "mca",
    age :22
}
const classes3 = {
    naam :"mitesh3",
    class : "mca",
    age :22
}
const college = {
    naam :classes,
    naam1 :classes1,
    naam2 :classes2,
    naam3 :classes3,
}

console.log(college)

let array = [1,2,3,4,5,6,7,8,9,10]
for( const num of array){
     if(num % 2 === 0){
        console.log("these are even " + num)

     }else{
        console.log("these are odd " + num)
     }
    
}

let t = true
let f = false
console.log(String(t + f))

//ternary
let num = 10
let isodd = num % 2 === 0 ? "not a odd number" : "is a odd number"

console.log(isodd)

console.log(Number(" "))

//conditional statements
let num1 = 0
if(num1 > 0){
    console.log("num is > 0 " + num1)
}else if(num1 < 0){
    console.log("num is < 0 " + num1)
}else{
    console.log(" num is 0" + undefined)
}

//loops
for(let i =0;i<=10;++i){
    console.log("number in this rotation is " + i)
}

let a1 = 0
while(a1 <=10){
    console.log("number in this rotation is " + a1)

    ++a1
}

let b1 = 11
do{
    console.log("this rotation num is " + b1)

    --b1
}while(b1 < 10 && b1 >=0)






