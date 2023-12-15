function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unit");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
        document.getElementById("error").innerText = "Please enter a valid number for temperature.";
        document.getElementById("result-container").innerText = "";
        return;
    } else if (selectedUnit === "") {
        document.getElementById("error").innerText = "Please choose the Unit/Degree.";
        document.getElementById("result-container").innerText = "";
        return;
    } else {
        document.getElementById("error").innerText = "";
    }

    

    var temperature = parseFloat(temperatureInput);

    var result;
    var resultUnit;

    if (selectedUnit === "celsius") {
        result = (temperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else if (selectedUnit === "fahrenheit") {
        result = (temperature - 32) * 5/9;
        resultUnit = "Celsius";
    } 

    document.getElementById("result-container").innerText = "Converted Temperature: " + result.toFixed(2) + " " + resultUnit;
}