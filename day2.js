//timeout
function p(n){
    console.log(n);
}
let df = setTimeout(p, 2000,10)
console.log(df);
clearTimeout(df)

// setTimeout(function f(){
//     console.log('h')
//     setTimeout(f, 2000)
// }, 1000)

// setInterval(function(){
//     console.log("mitesh")
// },2000)

setTimeout(function run(){
console.log("now");
}, 2000)