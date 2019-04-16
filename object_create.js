// create a prototype object
const detailsPrototype = {
  greeting: function(){
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(detailsPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thomson');
console.log(mary.greeting());
