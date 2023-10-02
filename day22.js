//variable
//let 
let al = 100
al = 10
console.log(al);

//const:once initialized must be declared once declared can't be re declared
const ac = 100
console.log(ac);

//data types
//primitives :- with actual value
console.log("string")
console.log(100)
console.log(null)
console.log(undefined)
console.log(true)
console.log(false)

//non primitives :collection of datas
const person ={
    p1:{
        name :"mitesh",
        class :"mca",
        age : 22
    },
    p2:{
        name :"mitesh2",
        class :"mca",
        age : 22
    },
    p3:{
        name :"mitesh3",
        class :"mca",
        age : 22
    },
    p4:{
        name :"mitesh4",
        class :"mca",
        age : [21,22,23]
    }
}
console.log(person.p4.age[1]);

//array
let ala =[{ p1:{
    name :"mitesh",
    class :"mca",
    age : 22
},
p2:{
    name :"mitesh2",
    class :"mca",
    age : 22
},
p3:{
    name :"mitesh3",
    class :"mca",
    age : 22
},
p4:{
    name :"mitesh4",
    class :"mca",
    age : [21,22,23]
}},2,3,4,5,6,7]

console.log(ala[0].p4.age[1])

//operators
//+-/*%++,--
//sting operator

console.log("mitesh" + 10);//mitesh10
console.log("mitesh" + "22");//mitesh22
console.log("mitesh" + null);//miteshnull
console.log("mitesh" + undefined);//miteshundefined
console.log("mitesh" + true);//miteshtrue
console.log("mitesh" + false);//mitesh false
console.log("mitesh" + []);//mitesh
console.log("mitesh" + {});//mitesh[object object]

//tenary operators
let num = 25
let check = num % 2 === 0 ? "is even " + num : "is odd " + num
console.log(check);

//tyes of conversions
console.log("10" - 5);//5
console.log(10 - 5);//5
console.log(10 - null);//10
console.log(10 - undefined);//nan
console.log(10 - true);//9
console.log(10 - false);//10
console.log(10 - []);//10
console.log(10 - {});//nan
console.log(10 - " ");//10

//number conversion
console.log(Number("100"));//100
console.log(Number(null));//0
console.log(Number(undefined));//nan
console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number({}));//nan
console.log(Number([]));//0
console.log(Number(" "));//0

//perserint
console.log(parseInt(5.5555));
console.log(parseFloat(5.5555));

//string
console.log(String({}));//[object object]
console.log(String([]));//
console.log(String(" "));//

//boolean:null,undefined,nan," ",0ls