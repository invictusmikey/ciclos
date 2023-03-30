let a = parseInt(prompt("ingrese el numero"));
let b = parseInt(prompt("ingrese el numero para la potencia"));
let potencia = 1;
let i = 1;

while (i <= b) {
    potencia *= a;
    i++;
}
console.log(potencia)