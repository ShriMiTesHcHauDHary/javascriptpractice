function gg(name){
    console.log(name);
}
let  as = setTimeout(gg, 2000,"mitesh")
clearTimeout(as)

let ai = setInterval(gg, 2000,"avish")
clearInterval(ai)

// setTimeout(function run(name){
//     console.log(name)
//     setTimeout(run,2000,"mitesh2")
// },2000,"mitesh")

//callbacks
function first(name){
    console.log(name)
}
function higherorderfunction(fn){
    let name = "mitesh"
    fn(name)
}
function higherorderfunction2(fn){
    let name = "mitesh2"
    fn(name)
}
 higherorderfunction2(first)

//promise 
// let text = 'not found'
// let result = new Promise((res,rej)=>{
//     if(text === 'found'){
//         console.log('tacos found')
//          res() 
//     }
//     console.log("not found")
//     rej()
// })

// function res(){
//     console.log("set up the table")
// }
// function rej(){
//     console.log("go for pasta");
// }

// result.then(res).catch(rej)


//promise static
//promise.all willgive all out up is all all fulfilled
// const promise1 = Promise.resolve(10)
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,20)
// })
// const promise3 = 30

// Promise.allSettled([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

//promise.allSettled will give you all output with reject or resolve status
// const promise1 = Promise.resolve(10)
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,20)
// })
// const promise3 = 30

// Promise.all([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// })

// const first1 = new Promise((resolve,reject)=>{
//     let a = 1
//     let b = 1
//     let c = 1
//     function sum(a,b,c){
//         return a+b+c
//     }
//     return sum()
//     resolve

// })

// const second = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"first")
// })

// Promise.race([first1,second]).then((value)=>console.log(value))
//===================
//async await
// function his(){
//     console.log('hello')
// }
// his()
// async function jjj(){
//     console.log('hello')
// }
// jjj()

// async function  write(){
//   let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('hello3'), 2000)
//   })

//   let result = await promise

//   console.log(result);

// }

// write()

//sequence await
function resolvehello(){
    return  new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('hello'),2000)
})
}

function resolveworld(){
    return new Promise((resolve,rejected)=>{
     setTimeout(()=>resolve('world'),1000)
    })
}

// async function final(){
//     let hello = await resolvehello()
    

//     let world = await resolveworld()
//     console.log(hello + world);

// }

// final()
//concurrent
// async function secondfinal(){
//     let first = resolvehello()
//     let second = resolveworld()

//     console.log(await first);
//     console.log(await second);
// }
// secondfinal()

//parallel

function parallel(){
Promise.all([
    (async () => console.log(await resolvehello()))(),
    (async () => console.log(await resolveworld()))(),
]).then(()=>console.log('done'))
}
parallel()