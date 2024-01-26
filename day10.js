// setTimeout(() => {
//     console.log("now");
// }, 1000);

//setimeout(funtion you want to ecute, min time taken , parameter if any)
// function type(names){
//     console.log(`hello ${names}`);
// }
// let timethis = setTimeout(type, 1000,"mitesh");
// clearTimeout(timethis)


// setInterval(() => {
//     console.log("now");
// }, 200);
// //recursive make sure mini time taken between the interval are some milli seconds
// let secod = setTimeout(function run(){
//     console.log("now")
//     setTimeout(run, 100)
// }, 200);
//sometime code take 40s and interval 60
//sometime code will take 50s and interval 50s
// let thired = setInterval(() => {
//     console.log("now");
// }, 100);

//callbacks
// function greet(naaam){
//     console.log(`hello ${naaam}`);
// }
// //hiher order functions

// function pree(fn){
//     let naaam = "mitesh"
//     greet(naaam)
// }

// pree()

// synchronous :-
//sort map filter

//async :- setimeouts

//promise
// let text = "not found"
// let result = new Promise((res,rej)=>{
//     if(text === "found"){
//         console.log("found");
//         res()
//     }else if(text === "not found"){
//         console.log("found");
//         rej()
//     }

// })

//promise ststics
// let promise1 = Promise.resolve(3)
// let promise2 = 44;
// let promise3 = setTimeout(() => {
//     console.log("now");
// }, 2000);

// Promise.all([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

// Promise.allSettled([promise1,promise3,promise2]).then((value)=>{
//     console.log(value);
// })

// Promise.race([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// })


//asyn await
// async function greet(){
//     console.log("hello");
// }

// greet()


function resolvehello(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("hello")
        }, 2000);
    })
}

function resolveworld(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("world")
        }, 1000);
    })
}

//sequence synchronously one by one
//concurent togetere with higher time yaker
//parallel which one come first 
async function type(){
    let first = await resolvehello()
    // console.log(first)  //sequence 
    let second = await resolveworld()
    // console.log(second)
    console.log(await first);  //concurent ek sath
    console.log(await second);
}

type()
// function parallel(){

//     Promise.all([
//         (async ()=>console.log(await resolvehello()))(),
//         (async ()=>console.log(await resolveworld()))(),
//     ])

// }

// parallel()

//event loop


