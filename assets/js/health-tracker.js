function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var result = "BMI Anda: " + bmi.toFixed(2) + "<br>";

    if (bmi < 18.5) {
        result += "Berat badan kurang.";
    } else if (bmi < 24.9) {
        result += "Berat badan normal.";
    } else if (bmi < 29.9) {
        result += "Berat badan berlebih.";
    } else {
        result += "Obesitas.";
    }

    document.getElementById("result").innerHTML = result;
}
