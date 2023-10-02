//settimeout
// setTimeout(()=>{

//     console.log("now ");

// },1000)

// let set = setTimeout(function run(){
//     console.log("now");
//     setTimeout(run, 1000);
// },2000)
// clearTimeout(set)

//setinterval out
// setInterval(()=>{
//     console.log("this");
// },1000)

//callback function
function greet(n){//=>callback function 
    console.log(`hello ${n}`);
}

function higher(){//==>higher order function
    let n = "mitesh"
    greet(n)
}
higher()

//promise
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

// let result1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         if(text === 'found'){
//             console.log('found tacos1');
//             res()
//         }else if(text ==='not found'){
//             console.log('not found');
//             rej()
//         }
        
//     }, 2000);
// })

// let result2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         if(text === 'found'){
//             console.log('found tacos2');
//             res()
//         }else if(text ==='not found'){
//             console.log('not found');
//             rej()
//         }
        
//     }, 3000);
// })



function res(){
    console.log('set up table');
}
function rej(){
    console.log('go for pasta');
}
result.then(res).catch(rej)