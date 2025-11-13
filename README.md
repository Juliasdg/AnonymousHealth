# 🧠 AnonymousHealth

Aplicação prática que demonstra como **técnicas de anonimização** impactam a capacidade de um modelo de **Machine Learning** identificar indivíduos em um conjunto de dados.

O projeto possui duas versões do mesmo processo:

1. **Sem anonimização** — o modelo tenta identificar pessoas usando dados sensíveis.
2. **Com anonimização** — os dados passam por técnicas estatísticas que impedem a identificação individual, reduzindo a acurácia e protegendo a privacidade.

---

## ⭐ Objetivos do Projeto

- Demonstrar na prática o efeito da anonimização.
- Aplicar conceitos simples de Machine Learning.
- Utilizar técnicas estatísticas para mascarar dados sensíveis.
- Comparar a acurácia com e sem anonimização.
- Implementar a lógica usando **Node.js**.
- Utilizar uma base de dados mínima (sem MySQL nesta versão).

---

## 🏗 Estrutura do Projeto

📁 ml/

├── app.js → Servidor Express

├── data.js → Base de dados simulada

├── anonymize.js → Técnicas de anonimização

├── train.js → Treinamento comparativo

└── package.json   

---

## 📊 Funcionamento (Versão Sem Anonimização)

Nesta versão, o modelo usa informações **exatas**:

- Idade
- Sexo
- Cidade
- Pressão arterial
- Glicemia

Com esses dados brutos, o “modelo” tem grande chance de identificar corretamente a pessoa.

---

## 🛡 Funcionamento (Versão Com Anonimização)

A anonimização aplica três métodos:

### ✔ Agrupamento de idade  
Ex.:  
- 18–24  
- 25–39  
- 40–59  
- 60+

### ✔ Agrupamento de cidade  
- “Região Metropolitana”  
- “Interior”

### ✔ Ruído estatístico (Distribuição Laplace)  
A glicemia e pressão recebem ruídos para dificultar a identificação exata:

valor + ruído

yaml
Copiar código

Esse ruído simula **privacidade diferencial**, técnica usada por Google e Apple.

---

## 🧪 Como Rodar o Projeto

### Instalar dependências
npm install

shell
Copiar código

### Rodar o treinamento
npm run train

shell
Copiar código

### Rodar o servidor Express (opcional)
npm start

---

## 📈 Exemplo de Saída (Esperado)

Treinando modelo: SEM ANONIMIZAÇÃO
Acurácia (sem anonimização): 0.8750

Treinando modelo: COM ANONIMIZAÇÃO
Acurácia (com anonimização): 0.1250


A queda drástica da acurácia mostra que a anonimização funcionou — o modelo **não consegue mais identificar o indivíduo**.

---

## 📁 Exemplo de Dados

### Antes:
```
{
  "idade": 34,
  "sexo": "F",
  "cidade": "SP",
  "glicemia": 90,
  "pressao": 120
}
```

### Depois:
json
Copiar código
{
  "idade": "25-39",
  "sexo": "F",
  "cidade": "Região Metropolitana",
  "glicemia": 92.4,
  "pressao": 117.8
}```

🔮 Possíveis Melhorias
- Persistência real em MySQL.

- API para cadastro e consulta de pacientes.

- Visualização dos dados anonimizados.

- Comparação entre várias técnicas de anonimização.

- Uso de modelos reais de ML.
