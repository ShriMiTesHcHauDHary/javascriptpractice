//type of conversion
console.log(10 - "5");//5
console.log(10 + "5");//105
console.log(10 - "string");//nan
console.log(10 - null);//10
console.log(10 - false);//10
console.log(10 - true);//9
console.log(10 - [ ]);//10
console.log(10 - " ");//10
console.log(10 - { });//nan

//operators
//assignemt operators
//=
//condtional operators true and false value
// ==,===,!==,<=,>=
//logical operators
//||,&&
//string operators
console.log(String(100));
console.log("3" + 3 - 3);


//ternary operator
let numm = 100
let check = numm % 2 ==0 ? "even" : "odd"
console.log(check);

//loops
let arrys = [0,1,2,3,4,5,6,7,8,9,1]
// for(let a=0; a< arrys.length;a++){
//     console.log(arrys[a]);
// }

// let a = arrys.length
// while(a >= 0){
//     console.log(arrys[a])
//     -- a
// }

let a = arrys.length
do{
    console.log(arrys[a])
    a--
}while(a >= 0)

//string and array
let naam1 = "mitesh"
for(const w of naam1){
    console.log(w + " in " + naam1);
}

for(const i of arrys){
    console.log(i + " is in  " + arrys[i]);
}

let person = {
    "one" : 1,
    "two" : 2,
    "three" : 3
}

for(const key in person){
    console.log(key + " on " + person[key]);
}

function isprime(n){
    if(n <= 1)
    return false;

    for(let i = 2 ; i < Math.sqrt(n) ; i++){
        let check = n%i ==0 ? false : true
        return check
    }
}

let n = 100
let result = isprime(n)
if(result){
    console.log(`num is prime ${n}`);
}else{
    console.log(`num is not prime ${n}`);
}
let mitesh =(a,b)=>{
    return a + b;
}
console.log(mitesh(10,20));