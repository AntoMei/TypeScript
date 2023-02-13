var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var sumButton = document.getElementById("sum-button");
sumButton.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var sum = num1 + num2;
    var sumInput = document.createElement("input");
    sumInput.setAttribute("type", "text");
    sumInput.value = sum.toString();
    sumInput.setAttribute("disabled", "true");
    document.body.appendChild(sumInput);
});
