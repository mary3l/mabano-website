let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celtoFar(){
  let output = ( parseFloat(celsius.value)* 9/5 ) + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
}
function fartoCel(){
  let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
  celsius.value = parseFloat(output.toFixed(2));
  console.log(output);
};

let meters = document.getElementById("meters");
let feet = document.getElementById("feet");

function meterstoFeet(){
  let output = (parseFloat(meters.value)) *3.2808;
  feet.value = parseFloat(output.toFixed(2));
}
function feettoMeters(){
  let output = (parseFloat(feet.value)) /3.2808;
  meters.value = parseFloat(output.toFixed(2));
};