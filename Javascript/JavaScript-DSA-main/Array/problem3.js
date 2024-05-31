/*  QUESTION

* Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

*/

/* 
* SOLUTION STARTS HERE 
*/

class displayFullName {
    constructor() {
        this.Name1 = ['A', 'M', 'E', 'Y', 'A' ,'B','E','L','V','A','L','K','A','R'];
        console.log(" Before Joining :- "+this.Name1);
        this.makeFullName = function()
        {
             return this.Name1.join('');
        }   
    }
}
var Name = new displayFullName();
console.log(" After Joining :- "+Name.makeFullName());

/* 
* OUTPUT
* Before Joining :- A,M,E,Y,A,B,E,L,V,A,L,K,A,R
* After Joining :- AMEYABELVALKAR

*/