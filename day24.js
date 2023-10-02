//variable
//let variable
let a = 100
a = 10
console.log(a);
//const varible:- once initialized must be declared once declared can,t be re declared
const ab = 100
// ab = 10
console.log(ab);
//data types
//primitives:- actual values
//string
console.log("string");
console.log(10);
console.log(null);
console.log(true);
console.log(false);
console.log(undefined);
//non primitives:- colletions of values
let pep ={
    p1 : {
        name :"mitesh1",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p2 : {
        name :"mitesh2",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p3 : {
        name :"mitesh3",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p4 : {
        name :"mitesh4",
        course :["b.com","mca"],
        age :[21,22,23]
    },
}
console.log(pep.p4.course[1]);
console.log(pep.p4.age[1]);

//array
let arar = [{
    p1 : {
        name :"mitesh1",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p2 : {
        name :"mitesh2",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p3 : {
        name :"mitesh3",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p4 : {
        name :"mitesh4",
        course :["b.com","mca"],
        age :[21,22,23]
    },
},1,2,3,4,5,6]
console.log(arar[0].p4.course[1]);

//operators
//assignment
//+-=?*%++--
//conditional operators
//==,===,!==,>,>=,<=,&&.||
//string operator
console.log("string" + []);

//ternary operator
let num = 11
let check = num % 2 ===0 ? "is even " + num : "is odd " + num
console.log(check);

//types of conversions
//implicitly
console.log(10 - "10");//0
console.log(10 - null);//10
console.log(10 - undefined);//nan
console.log(10 - true);//9
console.log(10 - {});//nan
console.log(10 - []);//10
console.log(10 - " ");//10
console.log(10 - false);//10
console.log(10 - "false");//10
console.log("new");
//explicitly
console.log(Number(10));//10
console.log(Number("string"));//nan
console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number({}));//nan
console.log(Number([]));
console.log(Number(" "));//0
console.log(Number(undefined));//nan
console.log(Number(null));//0

//clg
console.log(String(null));
//boolean:-0,null,un," "",nan,false
console.log(Boolean(null));
//conditional operats
let dice = 0
// if(dice<=0 || dice>6){
//     return console.log("err on this " +  `${dice}`);
// }else if(!Number(dice)){
//      console.log(`must be number can't be this ${dice}`);
// }else{
//     console.log(`move forward by ${dice}`);
// }
switch(dice){
    case 1:
    console.log(`move forward by ${dice}`);
    break
    case 2:
        console.log(`move forward by ${dice}`);
        break
        case 3:
            console.log(`move forward by ${dice}`);
            break
            case 4:
                console.log(`move forward by ${dice}`);
                break
                case 5:
                    console.log(`move forward by ${dice}`);
                    break
                    case 6:
                        console.log(`move forward by ${dice}`);
                        break
                        default :
                        console.log("try again");
}

//loops
let ara = ["q","w","e","r","t","y"]
// for(let i = 1;i<ara.length;i++){
//     console.log(i);
// }
// for(const n in ara){
//     console.log(ara[n]+"for in");
// }
let i = ara.length
// while(i>=0){
//     console.log(ara[i]);
//     --i
// }
do{
    console.log(ara[i]);
    --i
}while(i>=0)

let pep2 ={
    p1 : {
        name :"mitesh1",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p2 : {
        name :"mitesh2",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p3 : {
        name :"mitesh3",
        course :["b.com","mca"],
        age :[21,22,23]
    },
    p4 : {
        name :"mitesh4",
        course :["b.com","mca"],
        age :[21,22,23]
    },
}

let rer ={"1" : "one","2" : "two","3" : "three"}
for(const ob in rer){
    console.log(rer[ob]);
}

//arrowfunction
function isprime(n){
    if(n<=1)
    return console.log(`${n} is not prime`);

    for(i=2;i<n;i++){
        let check = n%i===0? "is not prime " + n : "is prime " + n
        return console.log(check);
    }
} 
isprime(17)

let isodd = (n)=>{
    let check = n %2 ===0 ? "not odd " + n : "is odd " + n
    return console.log(check);
}
isodd(10)

//scope
let name1 = "avish"
if(true){
    // let name = "mitesh"
    console.log(name1);
}

function p(){
    console.log(name1);
}
p()
