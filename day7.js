//settimeout
function greet(){
    console.log("hello");
}
// setTimeout(greet, 2000);

function greet2(name){
    console.log(`hello ${name}`);
}
let kk =setTimeout(greet2, 2000,"mitesh")
clearTimeout(kk)

//setintervalout
// let hhint = setInterval(()=>{
//     console.log("mitesh");
// },2000)
// clearInterval(hhint)
//setimeout and setinterval out are not the part of js they are used from browrs this functionality in javascript named as timeout and interval out
//recussive setimeout better then setintervalout bcz of duration bet code excutionis guranted
// setTimeout(function hui(){
//     console.log("hello");
//     setTimeout(hui, 1000)
// }, 2000);


//callbacks
function callme(name){  //function as argument for another function is callback
    console.log(`hello ${name}`);

}

function higher(fn){ // function who accpt function as argument or return is called as higher order function

    let name = "mitesh"
    callme(name)
}
higher()

//promise
let p1 = Promise.resolve(3)
let p2 = 22;
let text = "found"
const result = new Promise((res,rej)=>{
    setTimeout(() => {
        if(text === "found"){
            res()
        }else if(text === "not found"){
            rej()
        }
    }, 2000);
})

function res(){
    return console.log(`ready dinner table ${text}`);
}
function rej(){
    return console.log(`go for soup ${text}`);
}

Promise.race([p1,p2,result]).then((value)=>{
    console.log(value);
})
//static methods
//primise.all (if all are work non of them throw err it will show)
//in promise.all we use [ ] bcz of inbuilt function in which this all will iterate these promisies
//promise.allsettled (will give out put if one of them will give err or fail)
//promise.race(reject if any promise give err but will return the fast one if evryone works)