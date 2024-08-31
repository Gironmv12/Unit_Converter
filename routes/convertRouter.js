const express = require('express');
const router = express.Router();
const { convertLength } = require('../controller/lengthController');
const { convertWeight } = require('../controller/weightController');
const { convertTemperature } = require('../controller/temperatureController');

// Ruta para convertir longitud
router.post('/convert/length', (req, res, next) => {
    try {
        convertLength(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para convertir peso
router.post('/convert/weight', (req, res, next) => {
    try {
        convertWeight(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para convertir temperatura
router.post('/convert/temperature', (req, res, next) => {
    try {
        convertTemperature(req, res);
    } catch (error) {
        next(error);
    }
});

module.exports = router;