// Classes 

//define a class
class Person{
  //define constructor
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello ${this.firstName} ${this.lastName}, how are you doing?`;
  }

  calculateAge(){
    const difference = Date.now()-this.birthday.getTime();
    const getAge = new Date(difference);
    return Math.abs(getAge.getUTCFullYear()-1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  // static method
  static addNumbers(x,y){
    return x+y;
  }
}

const mary = new Person('Mary', 'Williams', '11-22-1990');
console.log(mary.calculateAge());
mary.getsMarried('Thomson');
console.log(mary.greeting());

//To call a static method you have to use the main class name
console.log(Person.addNumbers(1,2));