let c = 0;
let m = 0;
while (c <= 100) {
    if (c % 6 == 0) {
        m++;
        console.log("este es multiplo de 6", c)

    }

    c = c + 1

}
console.log("hay", m, "multiplos de 6");