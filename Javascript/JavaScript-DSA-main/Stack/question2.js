/* A postfix expression evaluator works on arithmetic expressions taking the following
form: op1 op2 operator
Using two stacks—one for the operands and one for the operators—design and implement a
JavaScript function that converts infix expressions to postfix expressions, and then use the
stacks to evaluate the expression.
 */
var input = "100/25";
var operands = new Stack();
var operators = new Stack();

var operandsFlip = new Stack();
var postfixStr = "";

function convertInfixToPostfix(input) {
  var numStr = "";

  for (var i = 0; i < input.length; i ++) {
    var curr = input[i];
    if (curr === "+" || curr === "-" || curr === "*" || curr === "/") {
      operators.push(curr);
      operands.push(numStr);
      numStr = "";
    } else {
      numStr += curr; 
    }
  }
  operands.push(numStr); 

  
  while (operands.length() > 0) {
    operandsFlip.push(operands.pop());
  }

  var operand1 = operandsFlip.pop();
  var operand2 = operandsFlip.pop();
  var operator = operators.pop();

  console.log("Postfix expression: " + operand1 + " " + operand2 + " " + operator);

  var result = eval(operand1 + operator + operand2);
  console.log("Posfix evaluated: " + result);
}

convertInfixToPostfix(input);