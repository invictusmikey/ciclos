let impar = parseInt(prompt("deme el numero final"))
let contador = 0;
let incremento = 1
while (incremento <= impar) {
    contador++
    if (contador % 2 != 0) {

        console.log("los impares del 1 al", impar, "son:");
        console.log(contador);

    }


    incremento++
}