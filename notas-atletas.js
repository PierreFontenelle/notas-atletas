let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function listaFinal(atletas) {
  let resultados = [];
  for (const elementos of atletas) {
    let notasComputadas = elementos.notas.sort().slice(1, elementos.notas.length - 1);
    let somaDasNotas = 0;
    let somaDasNotasValidas = notasComputadas.reduce(
      (valorTotal, valorAtual) => valorTotal + valorAtual,
      somaDasNotas
    );
    let mediaValida = somaDasNotasValidas / notasComputadas.length;
    console.log("Atleta: " + elementos.nome);
    console.log("Notas Obtidas:" + elementos.notas.sort().join(","));
    console.log("Média Válida: " + mediaValida);
    console.log("");

    resultados.push({
      nome: elementos.nome,
      notas: elementos.notas.sort(),
      media: mediaValida
    });
  }
  return resultados;
}

listaFinal(atletas);
