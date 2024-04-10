let primeironumero = parseInt (prompt ("Digite um número inteiro."));
let segundonumero = parseInt (prompt ("Digite outro número inteiro."));
function verificarPrompt(){
    if (primeironumero > segundonumero){
        alert (`O maior número é ${primeironumero}.`);
    }
    else{
        alert (`O maior número é ${segundonumero}.`);
    }


}