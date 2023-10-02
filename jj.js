// console.log("first")

// // setTimeout(()=>{
// //     console.log("second")
// // },0)

// console.log("third")
// function hh(name){
//     console.log("this is call back " + name);

// }

// console.log("first")

// let dd = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let name ="mitesh"
//     hh(name)
//     resolve()
//     },2000)

// }).then("done").catch((err)=>console.log(err))

// console.log("third")

let person={
    person1:{
        name:"mitesh",
        class :"mca",
        age :[22,23,24]
    },
    person2:{
        name:"mitesh",
        class :"mca",
        age :[22,23,24]
    },
    person3:{
        name:"mitesh",
        class :"mca",
        age :[22,23,24]
    },
    person4:{
        name:"mitesh",
        class :"mca",
        age :[22,23,24]
    },
    person5:{
        name:"mitesh",
        class :"mca",
        age :[22,23,24]
    }
}


    function findage(){
    let age = person.person3.age
    for(let i =0; i < age.length;i++){
        if(age[i]===22){
            console.log("this is my age " + age[i])
        }
    }
}




setTimeout(() => {
    console.log("mitesh")
}, 0)


let tt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        findage()
        resolve()
    },100)
})

console.log("mca")