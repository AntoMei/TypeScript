let numeros: number[] = [];
let suma: number = 0;
let contador: number = 0;

for (let i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt("Introduce un número:")));
  suma += numeros[i];
  if (numeros[i] >= 100) {
    contador++;
  }
}

alert("La suma de los números es: " + suma);
alert("Números mayores que 100: " + contador);