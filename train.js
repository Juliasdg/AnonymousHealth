// train.js

const original = require("./data");
const anonymize = require("./anonymize");

// "Modelo" estatístico fictício para mostrar perda de acurácia
function treinarModelo(nome, dataset) {
  console.log(`\n📦 Treinando modelo: ${nome}`);

  const resultados = dataset.map((pessoa, index) => {
    const score =
      (typeof pessoa.idade === "string" ? (index + 1) * 10 : pessoa.idade) * 0.5 +
      pessoa.pressao * 0.3 +
      pessoa.glicemia * 0.2;

    return { index, score };
  });

  // O modelo "adivinha" a pessoa com maior score
  const maisProvavel = resultados.reduce((a, b) =>
    a.score > b.score ? a : b
  );

  // Só conta como acerto se o índice previsto for igual ao real
  const acertos = resultados.filter(r => r.index === maisProvavel.index).length;

  const acuracia = acertos / resultados.length;

  console.log(`🎯 Acurácia (${nome}): ${acuracia.toFixed(4)}`);
}

function main() {
  console.log("\n==============================");
  console.log(" INICIANDO TESTES DE MODELO ");
  console.log("==============================");

  treinarModelo("SEM ANONIMIZAÇÃO", original);

  const anon = anonymize(original);

  treinarModelo("COM ANONIMIZAÇÃO", anon);

  console.log("\n🏁 Finalizado!");
}

main();
