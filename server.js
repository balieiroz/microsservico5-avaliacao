// Importação dos pacotes necessários
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Inicializa o app Express
const app = express();
const PORT = 3000; // Porta do servidor

// Caminho do arquivo JSON que guarda as avaliações
const reviewsFile = path.join(__dirname, 'data', 'reviews.json');

// Middlewares para processar requisições
app.use(cors()); // Permite comunicação entre diferentes origens
app.use(bodyParser.json()); // Permite receber dados no formato JSON
app.use(express.static('public')); // Define a pasta 'public' como pasta de arquivos estáticos (frontend)

// Função para ler as avaliações do arquivo JSON
function readReviews() {
    try {
        const data = fs.readFileSync(reviewsFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return []; // Se erro, retorna lista vazia
    }
}

// Função para salvar as avaliações no arquivo JSON
function saveReviews(reviews) {
    fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
}

// Rota GET para listar todas as avaliações
app.get('/reviews', (req, res) => {
    const reviews = readReviews();
    res.json(reviews);
});

// Rota POST para criar uma nova avaliação
app.post('/reviews', (req, res) => {
    const { restaurant, rating, comment } = req.body;
    
    // Validação simples dos dados
    if (!restaurant || !rating || !comment) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const reviews = readReviews();

    // Criação da nova avaliação
    const newReview = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        restaurant,
        rating,
        comment,
        date: new Date().toISOString() // Data de criação
    };

    // Adiciona a nova avaliação à lista
    reviews.push(newReview);
    saveReviews(reviews);

    res.status(201).json(newReview); // Retorna a avaliação criada
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
