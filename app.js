// Person Constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }
}

const birth = new Person('sayed', '9-22-1995');
console.log(birth.calculateAge());