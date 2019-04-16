//constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    let difference = Date.now() - this.birthday.getTime();
    let getAge = new Date(difference);
    return Math.abs(getAge.getUTCFullYear()-1970);
  }
}

const value = new Person('Sayed Rubel','09-22-1995');
console.log(value.calculateAge());