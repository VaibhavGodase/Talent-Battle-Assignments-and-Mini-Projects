/*  QUESTION

* Create a Grades Object That Stores a Set Of Students Grade in An Object. 

* Provide a Function For Adding a Grade And a Function For Displaying the Student's Grade Average

*/

/* 
* SOLUTION STARTS HERE 
*/ 

class Student {
    constructor() {
        this.grades = [];
        this.addGrades = addGrades;
        this.average = average;
    }
}
  
/* Function For Initializing Grades */
  function addGrades(value) {
    this.grades.push(value);
  };

  /* Function For Calculating Average */
  function average() {
    var total = 0;
    for(var i = 0; i < this.grades.length; i++){
      total += this.grades[i]; 
    }
    /* Average = Total Divided by Length Of Grades */
    return total/this.grades.length;
  };
  
  /* Creating Objects  */

  var Ameya = new Student();
  Ameya.addGrades(75);
  Ameya.addGrades(75);
  Ameya.addGrades(100);
  console.log(" Average Of Student Is " + Ameya.average() + " And His/Her Marks Are " + Ameya.grades);

  /* Creating Objects  */

  var Jayesh = new Student();
  Jayesh.addGrades(85);
  Jayesh.addGrades(88);
  Jayesh.addGrades(90);
  console.log(" Average Of Student Is " + Jayesh.average() + " And His/Her Marks Are " + Jayesh.grades);

  /* 
  * OUTPUT
  * Average Of Student Is 83.33333333333333 And His/Her Marks Are 75,75,100
  * Average Of Student Is 87.66666666666667 And His/Her Marks Are 85,88,90
  */