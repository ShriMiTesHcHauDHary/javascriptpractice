//variabe 
let al = 10
al = 20
al = 200
console.log(al)

const aac = 10
console.log(aac);

//data type 
let person = {
    name : "mitesh",
    class : "mca",
    age : {
        now : 22,
        after :23
    }
}

console.log(person.age.now);

//array 
let aarray = [1,2,3,4,5,6,7,8,9,10]
console.log(aarray[5])

//operators
let num1 = 10
let gg1 = num1 % 2 ===0 ? "is even " + num1 : " is odd " + num1
console.log(gg1);

//typesof conversions
console.log("null" + undefined);


//loops
//let array = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0;i<aarray.length;i++){
    console.log(aarray[i] + " num this time");
}

let i = 0
while(i<aarray.length){
    console.log(aarray[i]);
  ++i
}

for(let num of aarray){
    console.log(num);
}


