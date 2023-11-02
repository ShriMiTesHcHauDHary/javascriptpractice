//timeout
let ta = setTimeout(() => {
    console.log("2 sec has passed");
}, 2000);
clearTimeout(ta)

//setintervalout 100 milli sec gauranted btween inerval
let ia = setInterval(() => {
    console.log("1 milli sec");
}, 100);
clearInterval(ia)

// setTimeout(function run(){
//     console.log("now");
//     setTimeout(() => {
//         run()
//     }, 1000);
// }, 2000);


////diff between code excution 40ms interval 60ms
// setInterval(() => { 
//     console.log("now");
// }, 2000);

//callbacks
// function thiss(name1){
//     console.log(name1);;
// }
// function higherorder(fn){
//     let name1 = "mitesh"
//     thiss(name1)

// }
// higherorder()

//promise
// let text = "found"
// let result = new Promise((res,rej)=>{
//     if(text ==="found"){
//         setTimeout(() => {
//             console.log("found");
//             res()
//         }, 2000);
//     }
//     if(text ==="not found"){
//         setTimeout(() => {
//             console.log("not found");
//             rej()
//         }, 2000);
//     }
// })

// function res(){
//     return console.log("ready table tacos found");
// }
// function rej(){
//     return console.log("go for soup");
// }

// result.then(res).catch(rej)

let promise= Promise.resolve(3)
let promise2= 32
// let promise3= setTimeout(() => {
//     console.log("30");
// }, 2000);

// Promise.all([promise,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

// Promise.allSettled([promise,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

// Promise.race([promise,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

//async await
// async function greet(){
//     console.log("hello");
// }
// greet()

function resolvehello(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve("hello");
        }, 2000);
    })
}

function resolveworld(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve("world");
        }, 1000);
    })
}

async function resulthui(){
    const first =  resolvehello()
    const second =  resolveworld()

    console.log(await first)
    console.log(await second)
}

// async function resulthui(){
//     const first =  await resolvehello()
//     const second = await resolveworld()

//     console.log( first)
//     console.log( second)
// }

// resulthui()

// function parallet(){
//     Promise.all([
//         (async ()=>console.log(await resolvehello()))(),
//         (async ()=>console.log(await resolveworld()))()
//     ]).then(()=>{console.log("done");});
    
// }

// parallet()


//event loop
console.log("first");
setTimeout(() => {
    console.log("second");
}, 1000);
console.log("third");