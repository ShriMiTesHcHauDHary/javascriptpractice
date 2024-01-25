//variable
let aa = 100
aa = 10
console.log(aa);

const bb = 90
// bb = 9
console.log(bb);

//data type
console.log("string");
console.log(100);
console.log(true);
console.log(null);

let per ={
    p1:{
        name : "mitesh",
        class : "MCA",
        age : 23
    },
    p3:{
        name : "mitesh",
        class : "MCA",
        age : 23
    },
    p2:{
        name : "mitesh",
        class : "MCA",
        age : 23
    }
}

console.log(per.p3.age);

let array = [1,2,3,4,5,6,7,8,9,10]
for(const n of array){
    console.log(n);
}

//conversions
console.log(3 + "3");
console.log(3 + "3" - "3");
console.log(3 + "3" * "3");
console.log(5 - "3");
console.log(5 - "string");
console.log(5 - " ");
console.log(5 - [ ]);
console.log(5 - {});
console.log(5 - true);
console.log(5 - NaN);
console.log(5 - null);

//number
console.log(Number(" "));
console.log(Number([ ]));
console.log(Number("str"));

//parse
console.log(parseInt(3.14));
console.log(parseFloat(3.14));

//string
console.log(String(null));
console.log(toString(null));

//boolean = " ", nan, undefined,null, 0

let dice = 7
if(!Number(dice)){
    console.log(`not a number ${dice}`);
}else if(dice > 0 && dice <= 6){
    console.log(`move forward ${dice}`);
}else{
    console.log("try again");
}

for(let i = 0 ; i <= array.length;i++){
    console.log(array[1]);
}

let i = 0
while(i < array.length){
    console.log(array[i]);
    i++
}

let str = "mitesh"
for(const i of str){
    console.log(i + " on " + str);
}

for( const k in per){
    console.log(k[per] + " on " + k);
}

//find prime number
function isprime(n){
    if(n <= 1)
    return false

    for(let i= 2; i <= n; i++){
        let check = n%i ===0 ? false :true
        return check
    }

}
let n = 127
let result = isprime(n)
if(result){
    console.log(`number is prime ${n}`);
}else{
    console.log(`number is not prime ${n}`);
}

let arrow = () =>{
    console.log("mitesh");
}

arrow()

globalThis.naam1 = "mitesh" 
if(true){
    let naam2 = "vasu"
    console.log(naam2);
    console.log(naam1);
}