function clearScreen() {
    document.getElementById("input").value = "";
   }
    function show(value) {
        document.getElementById("input").value += value;
   }
    function calculate() {
        var i = document.getElementById("input").value;
        var o = eval(i);
        document.getElementById("input").value = o.toFixed(2);
   }
   function squareRoot()
   {
    var x = document.getElementById("input").value;
    var y = Math.sqrt(x);
    document.getElementById("input").value = y.toFixed(2);
   }
   function pi()
   {
    var x1 = document.getElementById("input").value;
    var y1 = Math.PI.toFixed(4);
    document.getElementById("input").value =x1+y1;
   }
   function pow()
   {
    var x2 = document.getElementById("input").value;
    var y2 = Math.pow(x2, 2);
    document.getElementById("input").value = y2;
   }
   function ln()
   {
    var x3 = document.getElementById("input").value;
    var y3 = Math.log(x3);
    document.getElementById("input").value = y3.toFixed(2);
   }
   function log()
   {
    var x4 = document.getElementById("input").value;
    var y4= Math.log10(x4);
    document.getElementById("input").value = y4.toFixed(2);
   }