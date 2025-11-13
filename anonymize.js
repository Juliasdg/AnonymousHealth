// anonymize.js

function laplaceNoise(scale = 1) {
  const u = Math.random() - 0.5;
  return -scale * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
}

function ageToGroup(age) {
  if (age < 25) return "18-24";
  if (age < 40) return "25-39";
  if (age < 60) return "40-59";
  return "60+";
}

function cityGroup(city) {
  if (city === "SP") return "Região Metropolitana";
  return "Interior";
}

function anonymize(data) {
  console.log("\n🔍 Dados originais:");
  console.table(data);

  const anon = data.map(p => ({
    idade: ageToGroup(p.idade),
    sexo: p.sexo,
    cidade: cityGroup(p.cidade),
    glicemia: p.glicemia + laplaceNoise(5),
    pressao: p.pressao + laplaceNoise(5)
  }));

  console.log("\n🔒 Dados ANONIMIZADOS:");
  console.table(anon);

  return anon;
}

module.exports = anonymize;
