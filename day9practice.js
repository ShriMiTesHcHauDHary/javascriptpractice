//variable
//let keyword use to decleared those variable which are about to future
let variable = 10
variable = 20
console.log(variable);

//const keyword once initailized must be declared and one declared can be redeclared
const cvariable = 10
// cvariable = 11
console.log(cvariable);

//data type
//premitives
let st = "string"
console.log(st);
console.log("strind 2");

let nu = 10
console.log(nu)
console.log(11);

let boolean = true
console.log(boolean)
console.log(false)

let un 
console.log(un);
console.log(undefined);

let b = null
console.log(b);
console.log(null);

//non premitives => collection of data type key(string,symbole value (any data type))
let student = {
    name : "mitesh",
    class :"mca",
    age:22
}

let student2 = {
    name : "mitesh3",
    class :"mca",
    age:22
}
let student3 = {
    name : "mitesh2",
    class :"mca",
    age:22
}
let student4 = {
    name : "mitesh1",
    class :"mca",
    age:22
}

let classes = {
    first : student,
    first2 : student2,
    first3 : student3,
    first4 : student4,

}

console.log(classes)

//+-/*%++__
//ternary
let num = 10
let beeb = num % 2 === 0 ? "is even " : "is odd"
console.log(num);

//type conversion
// console.log(x + y);//undefined
console.log("x" + "y");//xy
// console.log(x - y);//nan
console.log(null + false);//0
console.log(true + null);//1
console.log("sttv" - "huhu");//Nan
console.log(7 + 9);//16

//explicit conversion

// console.log(Number);
// console.log(String);
// console.log(object);
// console.log(object);
// console.log(object);

//loops
for(let i = 0;i<=10;i++){
    const a = i % 2 ===0 ? true : false
    if(a===true){
     console.log("this is even" + i);
    }else{
        console.log("this is odd" + i);
    }
}

let i = 0
while(i<=10){
    console.log("number this time is " + i)
    ++i
}

let hui = 10
do{
    console.log("number this time is " + hui);
     --hui
}while( hui<10 && hui>0)

let thisarray = [1,2,3,4,5,6,7,8,9,10]
for(let  num of thisarray){
    console.log("number this time is" + num)
}

//let a = Array.from("abcd")

function isprime(n){
    if(n <= 1){
        console.log("num is not prime " + n);
    }

    for(let i = 2;i < n; i++){
        let findthis = n%i===0 ? "not prime " :"is prime "
        return console.log(findthis + n);
    }

   
}

// isprime(127)
//let n = 127
let fun = (n) =>{
    if(n <= 1){
       return  console.log("num is not prime " + n);
    }

    for(let i = 2;i < n; i++){
        let findthis = n%i===0 ? "not prime " :"is prime "
        return console.log(findthis + n);
    }
}

fun(127)

//nested loops
let  first = 1
function num1(){
    let second = 2
    function num2(){
        let thired = 3
        function num3(){
            console.log(first,second,thired);
        }
        return num3()
    }
    
    return num2()
}

num1()

//closers

let closer1 = 0
function fn1(){
    let cloder2 = 0
    function fn2(){
        closer1++
        cloder2++
        console.log(closer1,cloder2)
        
    }
    return fn2()

}

fn1()
fn1()

//curring

// function add(a,b,c){
//     return a + b + c
// }
// function fg(a){
//     function fg(b){
//         function fg(c){
//              return fg(a,b,c)
//         }
//     }
// }

// let curried = add(fg())
// console.log(curried(1)(2)(3))

//this keyword

let person = {
    key :12,
    iseven : function iseven(){
        if(this.key % 2 ===0){
        console.log("this is even " + `${this.key}`);
        }else{
            console.log("this is odd " + `${this.key}`);
        }
    }
}

person.iseven()


function isprime(){
    if(this.key <= 1){
        return  console.log("num is not prime " + `${this.key}`);
     }
 
     for(let i = 2;i < `${this.key}`; i++){
         let findthis = this.key%i===0 ? "not prime " :"is prime "
         return console.log(findthis + `${this.key}`);
     }

}

isprime.call(person)

console.log(person.key);

function pop(value){
    
    this.key = value
}

let p1 = new pop("mitesh")
let p2 = new pop("radhika")

console.log(p1.key,p2.key)

let count = 0
function init(){
    let count2 = 0

    function printname(){//carrying a live data
        count++
        count2++
        console.log(count,count2)

    }
    return printname()
}
// init()
// init()

function init() { let name = "Mitesh1"; // name is a local variable created by init 
function displayName() { // displayName() is the inner function, that forms the closure 
    console.log(name); // use variable declared in the parent function 
} return displayName } 
 let dd = init()  //function can't return itself untill it call
 dd()
