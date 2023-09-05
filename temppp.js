function convertTemperature() {
    var temperatureInput = document.getElementById('temperature').value;
    var unitInput = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');
  
    // Validate temperature input
    if (!isNumeric(temperatureInput)) {
      resultElement.innerHTML = 'Invalid temperature input';
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var convertedUnit;
  
    if (unitInput === 'celsius') {
      convertedTemperature = (temperature - 32) * 5 / 9;
      convertedUnit = 'Celsius';
    } else if (unitInput === 'fahrenheit') {
      convertedTemperature = (temperature * 9 / 5) + 32;
      convertedUnit = 'Fahrenheit';
    } else if (unitInput === 'kelvin') {
      convertedTemperature = temperature + 273.15;
      convertedUnit = 'Kelvin';
    }
  
    resultElement.innerHTML = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' ' + convertedUnit;
  }
  
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }