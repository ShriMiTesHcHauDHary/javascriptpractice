//variable
//let use to update a value
let al = "mitesh"
al = 20
console.log(al)

//const :- once initalised must be declared once declared can't be updated
const ac = 100
console.log(ac)

//data types 
//perimitives :- with actual value
//string
let as = "mitesh"
console.log(as);
console.log("avish");
//number 
let an = 100
console.log(an);
console.log(10);
//boolean 
let ab = true
console.log(ab);
console.log(false);
//undefined
let au 
console.log(au);
//null is the best practise we we want to take value explicitly
let aul = null
console.log(aul);

//non permitives:- with collection of values
//object: must contain key and the value
let pep={
    person1 :{
        name : "mitesh",
        class : "mca",
        age : 22
    },
    person2 :{
        name :"avish",
        class : "mca",
        age : 18
    },
    person3 : {
        name : "vasu",
        class : "mca",
        age :[16,18,22]
    }
}
let oa = pep.person3.age
console.log(oa);

//array:- can consist of any data type
let adarray =[{name :"mitesh"},2,3,4,5,6,7,8,9,10]
console.log(adarray[0]);


//types of conversions
//console.log(x + y);//undefined
//console.log("x" + y);//y is undefined
console.log("x" + undefined);//xundefined
console.log("x" + "y");//xy
console.log("x" + null);//xnull
console.log(null + false);//0
console.log(true + true);//2

//conditional statment
let dice = 1
switch(dice){
    case 1:
    console.log("move forward by " + `${dice}`);
    break
    case 2:
    console.log("move forward by " + `${dice}`);
    break
    case 3:
    console.log("move forward by " + `${dice}`);
    break
    case 4:
    console.log("move forward by " + `${dice}`);
    break
    case 5:
    console.log("move forward by " + `${dice}`);
    break
    case 6:
    console.log("move forward by " + `${dice}`);
    break
    default :
    console.log("throw again not relevent results");
}

//loops
let alarray =[1,2,3,4,5,6,7,8,9,10]
// for(i = 0;i < alarray.length;i++){
//     console.log("number this time is " + alarray[i]);
// }


//while
let i = 0
while(i<alarray.length){
    console.log("number this time  " + alarray[i]);
    i++
}

//do
let rrrarray= [1,2,3,4,5,6,7,8,9,10]
let d = 0
do{
    console.log("num is " + rrrarray[d]);
    d++
}while(d > 0 && d < rrrarray.length)

//forof
for(const num of alarray){
    console.log(num);
}

//function
function isprime(na){
    if(na <= 1){
        return console.log("num is not prime " + na)
    }

    for(let i = 2; i <na;i++){
        if(na % i ===0){
             return console.log("num is not prime " + na);
        }
    }

    return console.log("num is prime " + na);
}

isprime(120)

let iseven = (a) => {
    let check = a%2===0?true :false
    console.log(check);
}

iseven(10)