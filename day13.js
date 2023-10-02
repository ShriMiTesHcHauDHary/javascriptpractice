//variable
let va = "mitesh"
 va = "mitesh222"
 console.log(va);

//const :- if initialised must declard if declared can't be re declared
const ca = 10
//const ca = 10
console.log(ca);

//data types
let ad = "string"
console.log(ad);

let an = 100
console.log(an);

let ab = true
console.log(ab);

let au = null //if we want to take value explicitly than null is standard method
console.log(au);

//object :- collection of value made of keys and values
//keys can be string and symboles but value can be any data type even object inside object too
let classes ={
    class1 : {
        name : "mitesh",
        class :"mca",
        age : 22
    },
    class2 : {
        name : "mitesh1",
        class :"mca",
        age : 22
    },
    class3 : {
        name : "mitesh2",
        class :"mca",
        age : 22
    },
    class4 : {
        name : "mitesh3",
        class :"mca",
        age : 22
    },
    class5 : {
        name : "mitesh4",
        class :"mca",
        age : 22
    },
    class6 : {
        name : "mitesh5",
        class :"mca",
        age : 22
    },
}

console.log(classes.class2.age);

//array 
let aarray = [1,2,3,4,5,6,7,8,9,10]
let parsra = aarray.toString().split(',')
console.log(parsra);

//opertors
let ao = 1
 ao--
 console.log(ao);

//ternary operstor
 let numw = 11
let t = numw % 2 === 0 ? "is even " + numw : " is odd " + numw
console.log(t);

//type of conversion
console.log(null + null);
console.log(null + "i");
console.log(null + true);
console.log(null + undefined);

//loops
let mearray =[1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ;i <mearray.length;++i){
    console.log(mearray[i]);
}

//while
let i = 0
while(i<mearray.length){
    console.log(mearray[i]);

    ++i
}

//do
do{
    console.log(mearray[i]);

    ++i
}while(i>0 && i < mearray.length)

//for of
let farray = [111,2,3,4,5,6,7,8,9,10]
for(const num of farray){
    console.log(num);
}

function isprime(no){
    if(!(no>1)){
        console.log("not prime less 1");
    }

   for(let i = 2;i<no;i++){
    if(no% i ===0){
        return console.log("not prime "+  no);
    }
   }
   return console.log("num is prime " +  no);
}

isprime(100)

let random = (key) =>{
    let value = key.toString(36).substring(0,3);
    let ran = parseInt(Math.random()*1000);
    return "@#?'" + value + ran
}
let gene = random("mitesh")
console.log(gene);