function Person(fname,lname){
    this.fname = fname
    this.lname = lname
}

let person1 = new Person("m","c")
let person2 = new Person("a","b")

Person.prototype.getFullName = function(){
    return this.fname + " " +  this.lname
}

console.log(person1.getFullName());
console.log(person2.getFullName());