let valor = parseFloat(prompt("Insira o valor para transformamos em dólar:"));
let resultado;
function calculoDolar(valor){
    return (valor*4.80);
}
resultado = calculoDolar(valor, resultado);
alert(`O valor em dólar é ${resultado}.`);