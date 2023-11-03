//assigment operator=
//archmetic operator+-/%*++--
//conditional operators==,===,!==,<=,>=,>,<
//logical operator && ||
//string
console.log(3+"3");
console.log(3+"3"+"3");
//ternary operator
let num = 10
let tch = num % 2===0? "even" : "odd"
console.log(tch);
//types of conversions
//implicit
console.log(10-"5");
console.log(10-"10");
console.log(10-"string");
console.log(10-null);
console.log(10-false);
console.log(10-[]);
console.log(10-{ });
console.log(10-" ");
console.log(10-true);

//number
console.log(Number("string"));
console.log(String(null));

//boolean //null undefined 0 " " nan => false

//loops
// for(let i = 0 ; i < 5;i++){
//     console.log("string");
// }

let i = 0
// while(i<10){
//     console.log("o");
//     i++
// }
// do{console.log("1");
// i++
// }while(i<10)

//for of
let aga = [0,1,2,3,4,5,6,7,8,9,10]
let aha = "miteshchaudhary"
// for(const i of aha){
//     console.log( i);
// }
let person ={

        name: "mitesh",
        class :"MCA",
        age :[21,22,23],
    
    
        name: "mitesh2",
        class :"MCA",
        age :[21,22,23],
    
    
        name: "mitesh3",
        class :"MCA",
        age :[21,22,23],
    
    
        name: "mitesh4",
        class :"MCA",
        age :[21,22,23]

}
for(const key in person){
    console.log(person[key] + " on " + key);
}

function isprime(n){
    if(n<=1) 
    return false
    for(let i = 2; i<n;i++){
        let check = n%i===0? false : true
        console.log(`${n} is ${check}`);

    }
}
// isprime(127)

let thisis =(a,b)=>{
    return a + b
}
let gg = thisis(10,10)
console.log(gg)

