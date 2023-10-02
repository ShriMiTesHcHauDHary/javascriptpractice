//variable 
//let 
let al = 100
al = 200
console.log(al);

//const:- once initialized must be declared  and once declareed can't be updated 
const ac = 100
console.log(ac);

//data types
//primitives (actual value)
console.log("mitesh");
console.log(10);
console.log(null);
console.log(undefined);
console.log(true);
console.log(false);

//non primitives:- which can store other data types in side them

//object key = string, symbole
//object value = any assigned data type
let pep = {
    person :{
        name : "mitesh",
        class : "mca",
        age:22
    },
    person2 :{
        name : "mitesh",
        class : "mca",
        age:[21,22,23,24]
    },
    person3 :{
        name : "mitesh",
        class : "mca",
        age:[21,22,23,24]
    },
    person4 :{
        name : "mitesh",
        class : "mca",
        age:22
    },
}

console.log(pep.person3.age[0]);

//array
let ala = [{
    person :{
        name : "mitesh",
        class : "mca",
        age:22
    },
    person2 :{
        name : "mitesh",
        class : "mca",
        age:[21,22,23,24]
    },
    person3 :{
        name : "mitesh",
        class : "mca",
        age:[21,22,23,24]
    },
    person4 :{
        name : "mitesh",
        class : "mca",
        age:22
    },
},2,3,4,5,6,7,8,9,]

console.log(ala[0].person3.age[0]);

//operators
//string operators :- can work on assigned data types
console.log("a" + "b")

//ternary operators
let num = 11
const is_even = num % 2 ===0 ? "is even " + num : "is odd " + num
console.log(is_even);

//typed of conversion
//implicit
console.log("a" - 10);//nan
console.log(10 - 10);//0
console.log(undefined - 10);//nan
console.log(null - 10);//-10
console.log(false - 10);//-10
console.log(10  - {});//nan
console.log(10 - []);//10

//explicit
//number
console.log(Number("string"))//nan
console.log(Number(10))//10
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number(null))//0


console.log(parseInt(5.666666))
console.log(parseFloat(5.666666))


//empty []=== 0
//string
console.log(String(10));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log(String(false));
console.log(String({}));
console.log(String([]));
console.log(Number({}))//nan
console.log(Number([]))//empty


//conditional statment
dice =  7
if(dice <= 0 || dice > 6){
     console.log("try again err")
     
}else{
    console.log("move forward by " + dice);
}

switch(dice){
    case 1 :
        console.log("move fprward by " + dice);
        break
        case 2 :
        console.log("move fprward by " + dice);
        break
        case 3 :
        console.log("move fprward by " + dice);
        break
        case 4 :
        console.log("move fprward by " + dice);
        break
        case 5 :
        console.log("move fprward by " + dice);
        break
        case 6 :
        console.log("move fprward by " + dice);
        break
        default :
        console.log("err try again");
}

//loops
//for
let ah = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ; i < ah.length ; i++){
    console.log("iteration this time is " + i)
}

//while
let i = 0
while(i < ah.length){
    console.log("iteration this time is " + i)

    ++i
}

do{
    console.log(i)
    ++i
}while(i >0 && i < ah.length)

//for of
for(const num of ah){
    console.log(num)
}

//function
function isprime(n){
    if(n <= 1){
        return console.log("number is not prime " + n)
    }

    for(let i = 2; i < n; i++){
       if(n % i === 0){
        console.log("not prime " + n)
        break
       }else{
        return console.log("is Prime " + n);
       }
       
    }
    
    
}

isprime(127)

let iseven = (n) =>{
    let check = n % 2 ===0 ? "iseven " + n : "not even " +n

    return check
}
let gg = iseven(10)
console.log(gg);