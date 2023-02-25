const inputValue = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const convertBtn = document.getElementById("convertBtn");
const outputUnit = document.getElementById("outputUnit");
const outputValue = document.getElementById("outputValue");

convertBtn.addEventListener("click", function() {
let inputNum = parseFloat(inputValue.value);
let inputUnitValue = inputUnit.value;
let outputUnitValue = outputUnit.value;

if (inputUnitValue === "celsius") {
if (outputUnitValue === "fahrenheit") {
outputValue.value = (inputNum * 9 / 5) + 32;
} else if (outputUnitValue === "kelvin") {
outputValue.value = inputNum + 273.15;
} else {
outputValue.value = inputNum;
}
} else if (inputUnitValue === "fahrenheit") {
if (outputUnitValue === "celsius") {
outputValue.value = (inputNum - 32) * 5 / 9;
} else if (outputUnitValue === "kelvin") {
outputValue.value = (inputNum - 32) * 5 / 9 + 273.15;
} else {
outputValue.value = inputNum;
}
} else if (inputUnitValue === "kelvin") {
if (outputUnitValue === "celsius") {
outputValue.value = inputNum - 273.15;
} else if (outputUnitValue === "fahrenheit") {
outputValue.value = (inputNum - 273.15) * 9 / 5 + 32;
} else {
outputValue.value = inputNum;
}
}
});