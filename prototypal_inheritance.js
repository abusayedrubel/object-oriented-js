// Prototypal Inheritance

// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
// person greeing prototype
Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

// customer Constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the person prototype method to customer
Customer.prototype = Object.create(Person.prototype);
//make customer prototype return customer()
Customer.prototype.constructor = Customer;

//override the greeting prototype
Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName} welcome to our company`;
}

// create customer
const customer1 = new Customer('Steve','Smith','01515265485','Standard');
console.log(customer1.greeting());

const person1 = new Person('John','Snow');
console.log(person1);
console.log(person1.greeting());