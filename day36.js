let al = 100
console.log(al);

const ac = 100
console.log(ac)

var av = 100
var av = 10
console.log(av);


//primitives with actual values
let naamp = "mitesh"
console.log(naamp);

console.log(200);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

//non primitives
let person = {
    "first" : "mitesh",
    "age" : 23,
    "class" :"mca 3 sem"
}

for(const key in person){
    console.log(person[key] + " on " + key);
}

let arryaa =  [0,1,2,3,4,5,6,7,8,9,10]
for(const w in arryaa){
    console.log(w);
}

//operators
//=
//arth +-/*%++,--
//==,===,>=,<=,>,<,!==
//logocal ||,&&
//string
console.log("3" + 3);
console.log(3 + + "3");
console.log(3 - "3" + 3);

//if else
let dice = "7"
if(!Number(dice)){
    console.log(`must be in numerical form`);
}else if(dice > 0 && dice <= 6){
    console.log(`move forward by ${dice}`);
}else{
    console.log(`try again`);
}

//loops
let arryaa1 = [0,1,2,3,4,5,6,7,8,9,10]
// for(let i = 0 ; i <arryaa1.length ; i++){
//      console.log(arryaa1[i]);
// }

let i = arryaa1.length
// while(i < arryaa1.length - 2){
//     console.log(arryaa1[i]);
//     i++
// }
do{
    console.log(arryaa1[i]);

    i--

}while(i > 0 && i < arryaa1.length)

//prime
function isprime(n){
    if(n <= 1)
    return false

    for(let i = 2 ; i <= Math.sqrt(n); i++){
        let check = n % i === 0 ? false : true
        return check
    }

}
let n = 137
let result = isprime(n)
if(result){
    console.log(`${n} is prime`);
}else{
    console.log(`${n} is not prime`);
} 
const arrowsum = (a,b) => a + b
const sum = arrowsum(2,3)
console.log(sum);

var a = {b : 1}
var c = a
a.b = 2                 
console.log(c.b);
