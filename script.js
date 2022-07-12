//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrada + " cm^2");
console.groupEnd("Cuadrados");

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
const alturaTriangulo= 5.5;

console.log("Los lados del tringulo miden " 
+ ladoTriangulo1 + " cm, "
+ ladoTriangulo2 + " cm, "
+ baseTriangulo + " cm ");
console.log("La altura del triangulo es " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimeto del triangulo es " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es " + areaTriangulo + " cm^2");

console.groupEnd("Triangulos");

