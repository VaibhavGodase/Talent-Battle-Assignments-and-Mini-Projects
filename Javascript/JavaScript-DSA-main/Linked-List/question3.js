/* Create a Person class that stores a person’s name and their gender. Create a list
of at least 10 Person objects. Write a function that displays all the people in the list
of the same gender
 */

function Person(name,gender) {
    this.name = name;
    this.gender = gender;
  }
  
  
  function PeopleList() {
    this.dataStore = [];
    this.listSize = 0;
    this.add = add;
    this.findPeopleOfGender = findPeopleOfGender;
  }
  
  function add(element) {
    this.dataStore[this.listSize++] = element;
  }
  
  function findPeopleOfGender(gender) {
    for (var i = 0; i < this.dataStore.length; i ++ ) {
      if (this.dataStore[i].gender == gender) {
        console.log(this.dataStore[i].name);
      }
    }
  }
  
  var people = new PeopleList();
  people.add(new Person("Ameya","m"));
  people.add(new Person("Jayesh","m"));
  people.add(new Person("Tushar","m"));
  people.add(new Person("Suraj","m"));
  people.add(new Person("Gaurav","m"));
  people.add(new Person("Shivani","f"));
  people.add(new Person("Shrutika","f"));
  people.add(new Person("Jayashree","f"));
  people.add(new Person("Vaidehi","f"));
  people.add(new Person("Mansi","f"));
  
  console.log("Gender Female")
  people.findPeopleOfGender("f");
  console.log("Gender Male")
  people.findPeopleOfGender("m");