let c = 0;
let contado = 0;
while (c <= 100) {
    if (c % 2 != 0) {
        contado++;
        console.log("este es impar", c)
    }
    c = c + 1

}

console.log("hay", contado, "numeros impares")