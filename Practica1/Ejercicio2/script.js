function calcularPrecio(precio) {
    var IVA = 0.21;
    var precioConIva = precio * (1 + IVA);
    return Number(precioConIva.toFixed(2));
}
var precio = parseFloat(prompt("Introduce el precio del artículo:"));
var precioConIva = calcularPrecio(precio);
alert("Precio con IVA incluido: " + precioConIva + " €");
