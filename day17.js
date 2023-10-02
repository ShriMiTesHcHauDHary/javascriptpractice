//variable
let al = 10
al = 20
console.log(al);

//const keyword :-once initialize must be declared once declared can't update

const ac = 10

console.log(ac);


//datatype
//perimitive dat type
console.log("m");
console.log(9);
console.log(true);
console.log(null);
console.log(undefined);

//non premitives 

let pep = {
    person1 : {
        name :"mitesh",
        class : "mca",
        age : 22
    },
    person2 : {
        name :"mitesh1",
        class : "mca",
        age : 221
    },
    person3 : {
        name :"mitesh2",
        class : "mca",
        age : 222
    },
    person4 : {
        name :"mitesh3",
        class : "mca",
        age : [{
            date : "15 june 2023"
        },
    { sem : 2}]
    },
}

console.log(pep.person4.age[0].date);

let ala = [{person1 : {
    name :"mitesh",
    class : "mca",
    age : 22
},
person2 : {
    name :"mitesh1",
    class : "mca",
    age : 221
},
person3 : {
    name :"mitesh2",
    class : "mca",
    age : 223
},},2,3,4,5,6,7,8,9,10]

console.log(ala[0].person3.age);

//types of conversion
console.log("a" - 9 );
console.log(10 - 9 );
console.log(null - 9 );
console.log(undefined - 9 );
console.log(true - 9 );
console.log(false - 9 );
// console.log(fals - pp);

console.log(Number([]));

//conditional
let dice = 1
// if(dice <=0){
//      return console.error("dice can't be 0 or negetive")
   
// }else if(dice > 6){
//     return console.error("dice can't be above 6")
// }else{
//     return console.log(`move ${dice} forward`);
// }

switch(dice){
        case 1 :
        console.log(`move ${dice} forward` )
        break
        case 2 :
        console.log(`move ${dice} forward` )
        break
        case 3 :
        console.log(`move ${dice} forward` )
        break
        case 4 :
        console.log(`move ${dice} forward` )
        break
        case 5 :
        console.log(`move ${dice} forward` )
        break
        case 6 :
        console.log(`move ${dice} forward` )
        break
        default:
        console.log("error try again");

}