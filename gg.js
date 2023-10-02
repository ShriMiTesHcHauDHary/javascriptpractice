let thisarray = [1,2,3,4,5,6,7,8,9,10]
for(const num of thisarray){

    if(num <= 1){
        return console.log("this is not a prime number " + num)
    }

    if(num % num === 0){
        console.log("this is prime number " + num)

    }
        console.log("this is not a prime number " + num)
    
}

//function call by assigned variable to function
function add(a,b){
    return a + b
}
const me = add(2,3)
console.log(me)
//arrow function can be made by assigned variable to function
const add2 = (a,b) => a + b
const u = add2(25,25)
console.log(u)