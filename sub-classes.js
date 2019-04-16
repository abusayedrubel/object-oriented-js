// Inheritance

// define a class
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello ${this.firstName} ${this.lastName}, how are you doing?`;
  }
}

//object for Person class
const john = new Person('John','Snow');
console.log(john);


// define another class which inherit the Person class
class Customer extends Person{
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  //define a static function : this method or function is under only the customer class, so it is not possible to call using person class
  static getMembership(){
    return 500;
  }
}

//object for customer class
const mary = new Customer('Mary', 'Williams','546443546','standard');
console.log(mary);
console.log(mary.greeting());

// call the static method
console.log(Customer.getMembership());