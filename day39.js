//conversions
console.log("string" + 10);
console.log("10" + 10);//1010
console.log("10" + "10" - 10);//1000
console.log("10" + 10 - "10");//1000


//conversion
console.log("10" - "string");
console.log("10" - " ");
console.log("10" - [ ]);
console.log("10" - { });
console.log("10" - null);
console.log("10" - false);
console.log("10" - true);
console.log("10" - undefined);

//operators
//ass =
//art +-*/%++--
//conditional ===,!==,<=,>=,>,<
//logical || &&
//string()
//ternary

//loops
let arr =[0,1,2,3,4,5,6,7,8,9,10,"o"]
let naam = "mitshchaudhary"
// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }
// let i = arr.length
// while(i >= 0){
//     console.log(arr[i]);
//     i --

// }
for(const i of naam){
    console.log(i);
}

let obj = {
    one : "1",
    two : "2",
    three : "3"
}
for(const key in obj){
    console.log(obj[key]);
}

function isprime(n){
    if(n <= 1) return false
    for(let i = 2; i <= Math.sqrt(n);i++){
        let check = n % i === 0 ? false : true
        return check
    }

}
let n = 127
let result = isprime(n)
if(result){
    console.log(`num is prime ${n}`);
}else{
    console.log(`num is not prime ${n}`);
}

//