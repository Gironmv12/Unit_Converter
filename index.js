const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const convertRouter = require('./routes/convertRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Asegúrate de que Express pueda parsear JSON
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

app.set('view engine', 'ejs');

// Rutas para convertir unidades
app.use('/api', convertRouter);

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});