//settimeout
// let a = setTimeout(()=>console.log('hello'),2000)
// console.log(a);
// clearTimeout(a)

// setTimeout(function run(){
// console.log('hello')
// setTimeout(run,2000)
// },1000)

// setInterval(()=>{
//     console.log('hello');
// },1000)


//callback
function m(name){
    console.log(name);
}

function higher(fn){
    let name = "mitesh"
    fn(name)
}

higher(m)


let text = 'found'
let result = new Promise((res,rej)=>{
    setTimeout(() => {
        if(text === 'found'){
            console.log('found tacos');
            res()
        }else if(text ==='not found'){
            console.log('not found');
            rej()
        }
        
    }, 4000);
})

let result1 = new Promise((res,rej)=>{
    setTimeout(() => {
        if(text === 'found'){
            console.log('found tacos1');
            res()
        }else if(text ==='not found'){
            console.log('not found');
            rej()
        }
        
    }, 2000);
})

let result2 = new Promise((res,rej)=>{
    setTimeout(() => {
        if(text === 'found'){
            console.log('found tacos2');
            res()
        }else if(text ==='not found'){
            console.log('not found');
            rej()
        }
        
    }, 3000);
})



function res(){
    console.log('set up table');
}
function rej(){
    console.log('go for pasta');
}
Promise.race(result,result1,result2).then(res).catch(rej)
// result.then(res).catch(rej)

