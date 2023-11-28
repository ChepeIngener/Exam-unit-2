function convertir() {
    var gradosCelsius = document.getElementById("gradosCelsius").value;
    var gradosFahrenheit = gradosCelsius * 9 / 5 + 32;
    document.getElementById("resultado").innerHTML = "Resultado: " + gradosFahrenheit + " grados Fahrenheit";
}