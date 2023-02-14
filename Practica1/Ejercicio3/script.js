function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    var resultadoField = document.createElement("input");
    resultadoField.type = "number";
    resultadoField.value = resultado.toString();
    resultadoField.disabled = true;
    var resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.innerHTML = "";
    resultadoContainer.appendChild(resultadoField);
}
