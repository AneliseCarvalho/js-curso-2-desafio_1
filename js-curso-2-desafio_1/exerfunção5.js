let numero = parseInt (prompt("Digite um número para receber a tabuada."))
let contador = 1;


while (contador < 11){
    let resultado = contaNumero(numero)
    function contaNumero(numero){
        return numero*contador
    }
    console.log (`${numero}X${contador}=${resultado}`);
    contador++;
}
