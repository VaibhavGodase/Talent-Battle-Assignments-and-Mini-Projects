/* A stack can be used to ensure that an arithmetic expression has balanced parentheses.
Write a function that takes an arithmetic expression as an argument and returns the
position in the expression where a parenthesis is missing. An example of an arithmetic
expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159* .24.
 */

var ns = new Stack();

var expression = "2.3 + (23 / 12 + 3.14159 * .24";

missingParen(expression);

function missingParen(expression) {
  var ns = new Stack();

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      ns.push(i);
    }

    if (expression[i] === ")") {
      if (ns.pop() === undefined) { 
        console.log("Mismatched  at " + i); 
      }
    }
  }

  if (ns.length() === 0) { 
    console.log("no mismatching parens!");
  } else if (ns.length() === 1) {
    console.log("Mismatching  at position " + ns.peek());
  }
}