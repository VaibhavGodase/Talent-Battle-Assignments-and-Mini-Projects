 // Function Creation
 function circuitPower(Vol, cur) {
    var Vol = document.getElementById("Voltage").value;
    var cur = document.getElementById("current").value;
    var pow = Vol * cur;
    document.getElementById("Result").innerHTML =
      "The Power Is : " + pow + " Watts (W) ";
  }