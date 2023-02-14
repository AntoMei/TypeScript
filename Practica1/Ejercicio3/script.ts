function sumar() {
  const num1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
  const num2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
  const resultado = num1 + num2;

  const resultadoField = document.createElement("input");
  resultadoField.type = "number";
  resultadoField.value = resultado.toString();
  resultadoField.disabled = true;

  const resultadoContainer = document.getElementById("resultado-container");
  resultadoContainer.innerHTML = "";
  resultadoContainer.appendChild(resultadoField);
}