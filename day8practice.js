//variable
let a = "mitesh"
a = 5
console.log(a)

const b = "mitesh"
//   b= 5
console.log(b)

//data types

//let x = Symbol("hello")
objecta = {
    name :"mitesh",  //keys(properties)=string and value=any data type
    class : Symbol,
    age : 22
}
console.log(objecta)

//array
const array = ["a","b","c","d","g"]
console.log(array[0])

//operators 
console.log(a + b);
console.log("a" - "b");
console.log(null + true);//nan
console.log(true - false);//
console.log(a + b);
// console.log(a - b);
// console.log(a - b);

//loops
for(let i = 0 ; i <10; i++){
    console.log("this number  is " + i)
}

 let i = 10
// while(i >= 0){
//     console.log("mitesh this time number is" + i)

//     ++i
// }

do{
    console.log("this number is" + i);

    --i
}while(i >=0 &&  i < 10)
const thisarray = [1,2,3,4,5,6,7,8,9,10]
for (const num of thisarray){
    console.log( "this number is" + num )
}

//function
//slice(-4)==> for last 4 elment ,  element
function randompassword(uniquekey){
    let key = uniquekey.toString().substring(0, 3)
    let random = Math.floor(Math.random()*50);
    let extrasymboles = "@#$%"
    return key + random + extrasymboles
}

const a1 = randompassword("mitesh")
console.log(a1)


//scope
let gg = "avish"

if(true){
    //let gg = "vasu";
    console.log(gg)
}
function book(){
    //let gg = "mitesh";
     console.log(gg)
}

book()