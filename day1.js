function say(name){
    console.log(name);
}
let af = setTimeout(say, 2000,"miteshrrr")
clearTimeout(af)

// setTimeout(function run(){
//     console.log('heloo');
//     setTimeout(run, 2000)
// },1000)

setInterval(say, 2000,"hello")


