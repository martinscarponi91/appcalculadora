const { sumar } = require("../funcionesCalculadora/sumar");
const { restar } = require("../funcionesCalculadora/restar");
const { multiplicar } = require("../funcionesCalculadora/multiplicar");
const { dividir } = require("../funcionesCalculadora/dividir");

const resultado = sumar(5, 7);
const resultado2 = restar(3, 1);
const resultado3 = multiplicar(10, 3);
const resultado4 = dividir(25, 0);

console.log("El resultado es " + resultado);
console.log("El resultado es " + resultado2);
console.log("El resultado es " + resultado3);
console.log("El resultado es " + resultado4);
