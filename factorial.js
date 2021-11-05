function factorial()
    {
    var n = document.getElementById("num").value;
    var i, f=1;
    for(i=1; i<=n; i++) f *= i;
    document.getElementById("fact").innerHTML = f;
    }
function sumMo()
    {
    var n = document.getElementById("num1").value;
    var i, f=0;
    for(i=1; i<=n; i++) f += i;
    document.getElementById("sum").innerHTML = f;
    }
function sumMo1()
    {
    var n = document.getElementById("num2").value;
    var i, f=0;
    for(i=1; i<=n; i++) f += i;
    var avg = f/i+.5
    document.getElementById("sum2").innerHTML = avg;
    }