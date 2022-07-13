//Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado (lado) {
return lado * 4;
}
perimetroCuadrado();
function areaCuadrada (lado){
    return lado * lado;
} 
areaCuadrada();
console.groupEnd("Cuadrados");

//Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1))+(Number(lado2))+(Number(base));
}
perimetroTriangulo();

function areaTriangulo (base, altura){
    return (base*altura)/2;
} 
areaTriangulo();
console.groupEnd("Triangulos");




//codigo del circulo
console.group("Circulos");

//Radio
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

function areaCirculo(radio){
    return (radio*radio)*PI;
} 

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

//Circulo

function calcularAreaCirculo(){
    const inputR = document.getElementById("InputCirculo")
    const radioC = inputR.value;

    const areaC = areaCirculo (radioC);
    alert (areaC);
}

function calcularDiametroCirculo(){
    const inputR = document.getElementById("InputCirculo")
    const radioC = inputR.value;

    const areaC = diametroCirculo (radioC);
    alert (areaC);
}

function calcularPerimetroCirculo(){
    const inputR = document.getElementById("InputCirculo")
    const radioC = inputR.value;

    const areaC = perimetroCirculo (radioC);
    alert (areaC);
}