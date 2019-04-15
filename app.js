// Person Constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
}

const birth = new Person('sayed', '9-22-1995');
console.log(birth);