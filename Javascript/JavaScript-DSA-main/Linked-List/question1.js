/* Write a function that inserts an element into a list only if the element to be
inserted is larger than any of the elements currently in the list. Larger can mean
either greater than when working with numeric values
 */


function putIn(element) {
    var dataStore = [4,8,9,10];
    var insertPos = this.find(element);
    if(insertPos > dataStore)
       {
      dataStore.push(element);
    }
   
    putIn(21);
    console.log(dataStore);
  }