const express = require('express');
const app = express();

//criando rota principal
app.get('/', (req, res) => {
    return res.json({ 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Mateus N.'
    });

})

app.listen(3333);