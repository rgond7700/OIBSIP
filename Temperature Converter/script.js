function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputTemperatureElement = document.getElementById("outputTemperature");
  
    if (isNaN(inputTemperature)) {
      outputTemperatureElement.textContent = "Please enter a valid number.";
      return;
    }
  
    let convertedTemperature, outputUnit;
  
    if (inputUnit === "celsius") {
      convertedTemperature = (inputTemperature * 9/5) + 32;
      outputUnit = "Fahrenheit";
    } else {
      convertedTemperature = (inputTemperature - 32) * 5/9;
      outputUnit = "Celsius";
    }
  
    outputTemperatureElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit}`;
  }
  