//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = '';
};

var persons = [];

persons.push(
  new Person('Lacee', 33),
  new Person('Ella', 4),
  new Person('Hayden', 3)
);

Person.prototype.sayName = function() {
  alert(this.name);
};

//Now create three instances of Person with data you make up

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
