let alturaDaSala = parseFloat(prompt("Informe a altura da sala."));
let larguraDaSala = parseFloat(prompt("Informe a largura da sala."));
function calcularAreaEPerimetro(altura, largura) {
    let area = altura*largura;

    let perimetro = 2 * (altura+largura);

    alert("Área da sala: " + area + "metros quadrados.");
    alert("Perímetro da sala: " + perimetro + "metros.");
}

calcularAreaEPerimetro(alturaDaSala, larguraDaSala);