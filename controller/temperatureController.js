const convertTemperature = (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    let result;

    const unitPrefixes = {
        C: 'Celsius',
        F: 'Fahrenheit',
        K: 'Kelvin',
    };

    if (fromUnit === 'C' && toUnit === 'F') {
        result = (value * 9/5) + 32;
    } else if (fromUnit === 'F' && toUnit === 'C') {
        result = (value - 32) * 5/9;
    } else if (fromUnit === 'C' && toUnit === 'K') {
        result = value + 273.15;
    } else if (fromUnit === 'K' && toUnit === 'C') {
        result = value - 273.15;
    } else if (fromUnit === 'F' && toUnit === 'K') {
        result = (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'K' && toUnit === 'F') {
        result = (value - 273.15) * 9/5 + 32;
    }

    res.json({ result: `${result} ${unitPrefixes[toUnit]}` }); // Incluir el prefijo de la unidad de destino en la respuesta
};

module.exports = { convertTemperature };