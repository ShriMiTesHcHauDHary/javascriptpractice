//conversions
console.log(10 + "string");//10string
console.log(10 + "10");//1010
console.log(10 + "10" - 10);//10
console.log(10 - "10");//0
console.log(10 - "string");//nan
console.log(10 - " ");//10
console.log(10 - [ ]);//10
console.log(10 - { });//nan
console.log(10 - true);//9
console.log(10 - false);//10
console.log(10 - undefined);//nan

//string converson
console.log("3" + "3");//33
console.log("3" + "3" - 3);//3
console.log("3" - "3" - 3);//-3

//operators
//assigment =
//conditional output in true and false
//==,===,!==,>=,<=,>,<
//logical operator || &&
//arthemetic orperator +-%/*++,--
//string operator
console.log(String(null));
//ternary operator
let num= 10
let check = num % 2 === 0 ? true :false
console.log(check);

//loops
let arrys=[0,"m",2,3,4,5,6,7,8,9,10]
// for( let i = 0;i <= arrys.length;i++){
//     console.log(arrys[i]);
// }

let i = arrys.length
// while(i >= 0){
//     console.log(arrys[i]);
//     i --
// }

do{
    console.log(arrys[i]);
    i--
}while(i >= 0)


//string loop in
let arr = [0,1,2,3,4,5,6,7,8,9,"m"]
let str = "miteshchaudhary"
for(const i of arr){
    console.log(i);
}
for(const i of str){
    console.log(i);
}

//object loop
let pep = {
    1 : "one",
    2 : "two",
    3 : "three"
}
for(const key in pep){
    console.log(pep[key]);
}

function isprime(n){
    if(n <= 1) return false;


    for(let i = 2;i < Math.sqrt(n);i++){
        let check = n%i == 0 ? false : true
        return check
    }

}
let n = 127
let result = isprime(n)
if(result){
    console.log(`${n} is prime`);
}else{
    console.log(`${n} is not prime`);
}

let huihui =(a,b) =>{
    return a + b
}

let hui1 = huihui(10,20)
console.log(hui1);