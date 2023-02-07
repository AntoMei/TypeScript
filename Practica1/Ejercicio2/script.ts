function calcularPrecio(precio: number): number {
    const IVA = 0.21;
    let precioConIva = precio * (1 + IVA);
    return Number(precioConIva.toFixed(2));
  }
  
  let precio: number = parseFloat(prompt("Introduce el precio del artículo:"));
  let precioConIva = calcularPrecio(precio);
  
  alert("Precio con IVA incluido: " + precioConIva + " €");