/* Write a function that inserts an element into a list only if the element to be
inserted is smaller than any of the elements currently in the list
 */


var numbers = [1, 2, 3, 4, 5];
     
      function arrayMax(arr) {
        var len = arr.length,
          max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      }
      maximum = arrayMax(numbers);
      function insert(num) {
        if (num > maximum) {
          numbers.push(num);
          console.log(numbers)
        } else 
        {
          console.log ("number should be greater than any number in list");
        }
      }

      //Tester
      insert(4);