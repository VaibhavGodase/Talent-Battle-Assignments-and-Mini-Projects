/* . An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write
a program that uses a stack (and maybe more than one) to remove the yellow ones without
changing the order of the other candies in the dispenser.
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.clear = clear;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
  }
  
  function push(element) {
    this.dataStore[this.top++] = element;
  }
  
  function peek() {
    return this.dataStore[this.top -1];
  }
  
  function pop() {
    return this.dataStore[--this.top];
  }
  
  function clear() {
    this.top = 0;
  }
  
  function length() {
    return this.top;
  }
  
  Stack.prototype.temporaryArray = [];
  Stack.prototype.temporaryTop = 0;
  Stack.prototype.pushInTemporaryArray = function(element) {
    this.temporaryArray[this.temporaryTop++] = element;
  };
  
  var s = new Stack();
  
  function fullArray(element) {
    
    element.forEach(function(item, i, arr){
      s.push(item);
    });  
  }
  
  function removeAllYellow(oldColor,newColor) {
    s.dataStore.forEach(function(item, i, arr) {
      if (item == oldColor) {
        s.pushInTemporaryArray(newColor);
      } else {
        s.pushInTemporaryArray(item);
      }
    });
    s.dataStore = s.temporaryArray;
  }
  
  
  fullArray(["white","yellow","green","white","yellow","green","white","yellow","green"]);
  
  removeAllYellow("yellow","red");
  console.log(s.dataStore);