// Object.prototype
// Person.protype

// take a Person Constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge1 = function(){
    const diff = Date.now()-this.birthday.getTime();
    const getAge = new Date(diff);
    return Math.abs(getAge.getUTCFullYear()-1970);
  }
}

//person protype
Person.prototype.calculateAge2 = function(){
  const diff = Date.now()-this.birthday.getTime();
  const getAge = new Date(diff);
  return Math.abs(getAge.getUTCFullYear()-1970);
}

// another person prototype
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// another person prototype
Person.prototype.getsMarried = function(lastName){
  this.lastName = lastName;
}

const john = new Person('John', 'Snow','10-10-1985');
const mary = new Person('Mary','Jonson','March 20 1978');
console.log(mary);
console.log(mary.calculateAge2());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());


// Object own prototype
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('calculateAge2()'));