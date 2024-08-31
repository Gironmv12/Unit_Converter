const convertLength = (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    let result;

    const conversionRates = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        inch: 25.4,
        ft: 304.8,
        yd: 914.4,
        mile: 1609344,
    };

    const unitPrefixes = {
        mm: 'milímetros',
        cm: 'centímetros',
        m: 'metros',
        km: 'kilómetros',
        inch: 'pulgadas',
        ft: 'pies',
        yd: 'yardas',
        mile: 'millas',
    };

    result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];

    res.json({ result: `${result} ${unitPrefixes[toUnit]}` }); // Incluir el prefijo de la unidad de destino en la respuesta
};

module.exports = { convertLength };