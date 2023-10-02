function cal(name){
    console.log(`hello ${name}`);
}
function higher(fn){
    name = "mitesh"
    fn(name)
}

higher(cal)


// setTimeout(function run(){
//     console.log("now");
//     setTimeout(run,2000)
// },1000)

//callbacks
function greet(n){
   console.log(`hello ${n}`);
}

function h(h){
    n = "mitesh"
    h(n)
}

h(greet)

//promise
// let text = 'not found'

// let result = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(text === 'found'){
//             return res()
            
//         }else if(text==='not found'){
//             rej()
//         }
//     },2000)
// })

// function res(){
//     console.log('go for table set up');
// }
// function rej(){
//     console.log("go for pasta");
// }

// result.then(res).catch(rej)

let a = new Promise((res,rej)=>{
    setTimeout(()=>res('1'),1000)
})
let b = new Promise((res,rej)=>{
    setTimeout(()=>res('2'),2000)
})
let c = new Promise((res,rej)=>{
    setTimeout(()=>res('3'),3000)
})

a.then("done")