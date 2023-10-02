//variable
let va = 10
va = 20
console.log(va);

const vb =30//once initialize must be declared once declared can't re declared 
// vb = 30
console.log(vb);

//data types
const objecta ={
    name :"mitesh",
    class :"mca",
    rollno : 20
}

//loop
let larray=[1,2,3,4,5,6,7,8,9,10]
for(let i = 0;i<larray.length;i++){
    console.log("this iterstion id " + larray[i]);
}

//while loop
let warray=[1,2,3,4,5,6,7,8,9,10]
 let i = 0
while(i < warray.length){
    console.log("this iterstion is " + warray[i]);

    ++i
}

//do while loop
let darray=[1,2,3,4,5,6,7,8,9,10]
let id = 0
do {
    console.log("array from 1 index " + darray[id]);

    ++id
}while(id > 0 && id < darray.length)

//for of 
let ofobject =[1,2,3,4,5,6,7,8,9,10]

for(const key of ofobject){
    console.log("this iteation is " + key);
}

//function :- individual function can't return something beacause no memmory unit (variable) uploaded

function randompassword(uniquekey){
    let value = uniquekey.toString().substring(0,3)
    let random = parseInt(Math.random()*1000);
    return value + random + "@#$%^"
}

let ar = randompassword("mitesh")
console.log(ar);


let arrow = (key) =>{
    let value = key.toString().substring(0,3)
    let random = parseInt(Math.random()*1000);
    return value + random + "@#$%^"
}

let aar = arrow("mitesh")
console.log(aar);

//block scope
globalThis.namee = "avish"
if(true){
    let nameb = "mitesh"
    console.log(nameb)
    console.log(namee)
}

function tname(){
    let a = "vasu"
    console.log(a)
    console.log(namee)
    //console.log(nameb) ca,'t reach each other scope
}
tname()

