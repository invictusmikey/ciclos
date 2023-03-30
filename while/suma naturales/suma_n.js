let numeros = parseInt(prompt("ingrese hasta que numero quiere"));
let contador = 0;
let incremento = 1;
while (incremento <= numeros) {
    contador = contador + incremento;
    incremento = incremento + 1;
}
console.log(contador)