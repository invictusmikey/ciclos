let suma 
let acumulador = 0;
let contador =-1;
while(suma != 0){
   
    suma=parseInt(prompt("ingrese numero a promediar"));
    contador++
    acumulador +=suma;
    
}
console.log("el promedio de sus numeros es:",acumulador/contador);