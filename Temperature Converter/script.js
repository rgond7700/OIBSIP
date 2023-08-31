document.getElementById("convertBtn").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = "celsius";  // Convert to Celsius by default
    
    let convertedTemperature;
    
    if (unitFrom === "celsius") {
      convertedTemperature = temperature;
    } else if (unitFrom === "fahrenheit") {
      convertedTemperature = (temperature - 32) * (5 / 9);
    } else if (unitFrom === "kelvin") {
      convertedTemperature = temperature - 273.15;
    }
    
    document.getElementById("result").innerText = `${temperature} ${unitFrom.toUpperCase()} is ${convertedTemperature.toFixed(2)} ${unitTo.toUpperCase()}`;
  });
  