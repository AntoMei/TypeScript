const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const sumButton = document.getElementById("sum-button") as HTMLButtonElement;

sumButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const sum = num1 + num2;
  const sumInput = document.createElement("input");
  sumInput.setAttribute("type", "text");
  sumInput.value = sum.toString();
  sumInput.setAttribute("disabled", "true");
  document.body.appendChild(sumInput);
});
