settimeout : block of code will run after particular time
let sset = setTimeout(() => {
    console.log("hello");
}, 2000);

clearTimeout(sset)

setintervalout
let sseet = setInterval(() => {
    console.log('hello');
}, 1000);
clearInterval(sseet)

both are not part of javascript they are used from browers between both use settimeout over interval when we have to rpint something reperted bcz setimmeout will give gurantedd time between to out up not interval timeout
setTimeout(function run(name){
    console.log(`hello ${name}`);
    setTimeout(run, 1000)
}, 2000,"mitesh");

callback : a function be argument to anothr function name as callback
higherorder function : a function which taken another function as argument
function cc(name){
    console.log(`hello ${name}`);
}

function higher(fn){
    let name = "mitesh"
    cc(name)
}

higher()


promise
let text = "found"
let result = new Promise((res,rej)=>{
    setTimeout(() => {
        if(text === "found"){
            console.log("found");
            res()
        }else{
            console.log("not found");
            rej()
        }
    }, 2000);
})



function res(){
    console.log(`${text} 2get dinner ready`);
}

function rej(){
    console.log(`${text} 2go for soup`);
}

result.then(res).catch(rej)

let promise1 = Promise.resolve(3);
let promise2 = 22;
let promise3 = setTimeout((name) => {
        console.log(`hello ${name}`);
     }, 2000,"mitesh");

Promise.all([promise1,promise2,promise3]).then((value)=>{
console.log(value);
})
all will rn only if no one will give err

Promise.allSettled([promise1,promise2,promise3]).then((value)=>{
    console.log(value);
    })

allSettled will run and tell ehich one is fullfiled res rej

Promise.race([promise1,promise2,promise3]).then((value)=>{
    console.log(value);
    })
race will tell which one is fast

async await
normal function 
function geet(){
    console.log("hello n");
}

async function geet2(){
    console.log("hello async");
}//promise[fullfiled : hello async]

geet()
geet2()

//await can be put anywhere untill the promise setteled and return result 

//sequential await  diff time this will take morre time due to diff execution

function thisis2(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('mitesh')
        }, 2000);
    })
}

function thisis(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('hello')
        }, 1000);
    })
}

async function done(){
    let mitesh = await thisis2()
    console.log(mitesh);//this will take 2 sec

    let hello = await thisis()
    console.log(hello);//this will take 2(of mitesh block code) + 1 on its own = 3 sec
}

// done()

//concurretn approach
async function done2(){
    let mitesh = thisis2()
    let hello =  thisis()
    
    console.log(await mitesh);//this take 2 sec
    console.log(await hello);//till mitesh solve this one ready with value
}

// done2()

//parallel : inidividual they perform and come on there assigned time
function parallel(){
    Promise.all([
        (async ()=> console.log(await thisis2()))(),
        (async ()=> console.log(await thisis()))(),
        
    ])
}

parallel()


event loop
async settimeoyut event loop


console.log("first");//global(),first(),clg()
setTimeout(() => {
    console.log("sec");
}, 100);//global(),webapi(),queue(),check stack is empty then stack()
console.log("thired");//global(),first(),clg()

promise settimeout => promise will go to to micro queue 
console.log('first');//stack(global()>clg())
setTimeout(() => {
    console.log("get api");
}, 100);//stack>web api>memory(res(),rej() value(promise res()))> micro queue>stack empty then clg()
console.log("third");//stack(global()>clg())


piority promise  micro task queue(fast) > settimeout tack queue