const express = require('express');
const data = require('./data');
const anonymize = require('./anonymize');
const train = require('./train');

const app = express();
app.use(express.json());

// Rota para obter dados crus
app.get('/data', (req, res) => {
  res.json(data);
});

// Rota para obter dados anonimizados
app.get('/data/anonymized', (req, res) => {
  const anonData = anonymize(data);
  res.json(anonData);
});

// Rota para treinar o modelo com os dados (dummy)
app.post('/train', (req, res) => {
  const result = train(data);
  res.json({
    message: "Treinamento concluído com sucesso!",
    result
  });
});

// Porta padrão
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
