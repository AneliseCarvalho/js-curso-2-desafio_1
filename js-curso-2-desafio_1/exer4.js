let numero1 = parseInt (prompt ("Informe um número."));
let numero2 = parseInt (prompt ("Informe outro número."));
let numero3 = parseInt (prompt ("Informe mais um número."));
function verificarNumero (){
    let media = (numero1 + numero2 + numero3)/3
    alert (`A média dos números é ${media}.`);
}
verificarNumero(numero1);