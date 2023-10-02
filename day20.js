//variable
//let once declared can be update
let al = 10
// al = 20
console.log(al)

//const:once initialized must be declared once declared can't be updated
const ac = 100
console.log(ac);

//data types
//perimitives:actual value
console.log("mitesh")
console.log(22)
console.log(true)
console.log(false)
console.log(null)
console.log(undefined)
//non primitives:collection of value
let pep={
    p1 :{
        name :"mitesh1",
        class :"mca",
        age :22
    },
    p2 :{
        name :"mitesh2",
        class :"mca",
        age :22
    },
    p3 :{
        name :"mitesh3",
        class :"mca",
        age :22
    },
    p4 :{
        name :"mitesh4",
        class :"mca",
        age :[{
            now : 22,
            now2 : 20
        },23,24]
    },
}
console.log(pep.p4.age[1])

//array
let ala = [{  p1 :{
    name :"mitesh1",
    class :"mca",
    age :22
},
p2 :{
    name :"mitesh2",
    class :"mca",
    age :22
},
p3 :{
    name :"mitesh3",
    class :"mca",
    age :22
},
p4 :{
    name :"mitesh4",
    class :"mca",
    age :[{
        now : 22,
        now2 : 20
    },23,24]
},},1,2,3,4,5,6,7]

console.log(ala[0].p4.age[0].now2);

//ternary operators
let num = 11
const isodd = num % 2 === 0 ? "not odd " + num : "is odd " + num

console.log(isodd);

//conditional statments
// let dice = 0
// if(dice <= 0 || dice > 6  ){
//     return console.log(`error try again this is not accepted ` + dice)
// }else{
//     console.log(`move forward by ` + dice)
// }
let dice = 1
switch(dice){
    case 1 :
        console.log(`move forward by one ` + dice);
        break
        case 2 :
        console.log(`move forward by one ` + dice);
        break
        case 3 :
        console.log(`move forward by one ` + dice);
        break
        case 4 :
        console.log(`move forward by one ` + dice);
        break
        case 5 :
        console.log(`move forward by one ` + dice);
        break
        case 6 :
        console.log(`move forward by one ` + dice);
        break
        default :
        console.log(`err not this not allowed ` + dice);
}

//loops
let ara = [1,2,3,4,5,6,7,8,9,10]
for(let i = ara.length; i >= 0; i--){
    console.log(i);
}
// let i = 0
// while(i<ara.length){
//     console.log("while " +  i);
//     ++i
// }
let i = ara.length
do{
    console.log("do " +  i);
    --i
}while(i >= 0)

//forof
for(const n of ara){
    
    console.log(n)
}

//function
function ispime(n){
    if(n <= 1){
        return console.log("not prime " + n);
    }

    for(let i = 2 ; i < n; i++){
        let isp = n % i ===0 ? 'not prime ' +  n : "is prime " + n

        return console.log(isp);
    }
}

ispime(93)

let dd = (a) => {
    let ise = a % 2 === 0 ? "is even " + a : "is odd " + a
    console.log(ise);
}
dd(10)
