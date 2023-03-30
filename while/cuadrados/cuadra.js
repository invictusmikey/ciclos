let suma=parseInt(prompt("ingrese hasta que numero quiere llegar"));
acumulador=1;
contador = 1;
while (contador<=suma) {
    acumulador= acumulador*2;
    console.log("se va acumulando los cuadrados",acumulador);
    contador++;
}
