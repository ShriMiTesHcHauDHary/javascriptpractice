//settimeout() function to excute after block of code once after a specified time
function say(name){
    console.log(name);
}
let af = setTimeout(say, 2000,"miteshrrr")
//clearTimeout(af)

// let ag = setInterval(say, 100)

//diff
//settime:- duration is difference is guranted of interval
//setinterval :- duration not guarented it will add time taken by the code to

setTimeout(function again(){
    console.log("mitesh");
    setTimeout(again, 2000)
}, 2000)
