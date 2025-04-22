# 🍕🍣🍔 Delivery Review Service

Sistema de avaliações de pedidos para restaurantes!

Projeto desenvolvido com:
- Node.js + Express (Back-end)
- HTML + CSS + JavaScript (Front-end)
- Armazenamento em arquivo JSON

---

## 📂 Estrutura do Projeto

```
delivery-review-service/
│
├── data/
│   └── reviews.json   (Arquivo de avaliações)
│
├── public/
│   └── index.html     (Front-end)
│
├── server.js          (Back-end Express)
└── package.json       (Dependências)
```

---

## 🚀 Como Rodar o Projeto

1. **Clone o projeto** ou baixe os arquivos.
   
2. **Instale as dependências**:

```bash
npm install
```

3. **Inicie o servidor**:

```bash
node server.js
```

4. **Acesse no navegador**:

```
http://localhost:3000
```

---

## 🛠️ Endpoints disponíveis

### `GET /reviews`
- Retorna todas as avaliações cadastradas.

### `POST /reviews`
- Cria uma nova avaliação.
- Exemplo de corpo da requisição (`JSON`):

```json
{
  "restaurant": "Pizzaria Napoli",
  "rating": 5,
  "comment": "Pizza maravilhosa!"
}
```

---

## 🎨 Front-end

- Formulário para cadastrar novas avaliações.
- Lista de avaliações já realizadas.
- Design moderno e agradável em tons de rosa bebê 💖.

---

## ✨ Observações

- **Sem necessidade de login**.
- **Dados persistidos localmente** no arquivo `reviews.json`.
- Projeto pronto para integração futura com banco de dados MySQL.

---

Feito com carinho! 💖🚀
Maria Eduarda Balieiro

