// Person Constructor
function Person(name, age){
  this.name = name;
  this.birthday = new Date(age);

  this.calculateAge = function(){
    const difference = Date.now()-this.birthday.getTime();
    const getDate = new Date(difference);
    return Math.abs(getDate.getUTCFullYear()-1970);
  }
}

const value = new Person('rubel', '09-22-1995');

console.log(value.calculateAge());