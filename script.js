//Codigo del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");
 */
function perimetroCuadrado (lado) {
return lado * 4;
}
perimetroCuadrado();

/* console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");
 */

function areaCuadrada (lado){
    return lado * lado;
} 
areaCuadrada();
/* 
console.log("El area del cuadrado es " + areaCuadrada + " cm^2");
 */
console.groupEnd("Cuadrados");

//Codigo del triangulo
console.group("Triangulos");
/* 
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
const alturaTriangulo= 5.5;
 */
/* console.log("Los lados del tringulo miden " 
+ ladoTriangulo1 + " cm, "
+ ladoTriangulo2 + " cm, "
+ baseTriangulo + " cm ");
console.log("La altura del triangulo es " + alturaTriangulo + " cm");
 */
function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1))+(Number(lado2))+(Number(base));
}
perimetroTriangulo();

/* console.log("El perimeto del triangulo es " + perimetroTriangulo + " cm");
 */
function areaTriangulo (base, altura){
    return (base*altura)/2;
} 
areaTriangulo();
/* console.log("El area del triangulo es " + areaTriangulo + " cm^2");
 */
console.groupEnd("Triangulos");




//codigo del circulo
console.group("Circulos");

//Radio

/* const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cm");
 *///Diametro

function diametroCirculo(radio){
    return radio * 2;
}
diametroCirculo();
/* console.log("El radio del circulo es " + radioCirculo + " cm");
 *///PI

const PI = Math.PI;
console.log("PI es " + PI);
//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();


/* console.log("El perimetro del circulo es " + perimetroCirculo + " cm");
 *///Area

function areaCirculo(radio){
    return (radio*radio)*PI;
} 


/* console.log("El area del circulo es " + areaCirculo + " cm");
 */
console.groupEnd("Circulos");

//Aqui interactuamos con HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert (area);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("InputTrianguloA");
    const ladoA = inputA.value;

    const inputB = document.getElementById("InputTrianguloB");
    const ladoB = inputB.value;

    const inputH = document.getElementById("InputTrianguloH");
    const ladoH = inputH.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const ladoBase = inputBase.value;

    const perimetroT = perimetroTriangulo (ladoA, ladoB, ladoBase);
    alert (perimetroT);
}

function calcularAreaTriangulo(){
    const inputA = document.getElementById("InputTrianguloA");
    const ladoA = inputA.value;

    const inputB = document.getElementById("InputTrianguloB");
    const ladoB = inputB.value;

    const inputH = document.getElementById("InputTrianguloH");
    const ladoH = inputH.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const ladoBase = inputBase.value;

    const areaT = areaTriangulo (ladoBase, ladoH);
    alert (areaT);
}