const convertWeight = (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    let result;

    const conversionRates = {
        mg: 1,
        g: 1000,
        kg: 1000000,
        ton: 1000000000,
        oz: 28349.5,
        lb: 453592,
    };

    const unitPrefixes = {
        mg: 'miligramos',
        g: 'gramos',
        kg: 'kilogramos',
        ton: 'toneladas',
        oz: 'onzas',
        lb: 'libras',
    };

    result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
    result = result.toFixed(2); // Redondear a dos decimales

    res.json({ result: `${result} ${unitPrefixes[toUnit]}` }); // Incluir el prefijo de la unidad de destino en la respuesta
};

module.exports = { convertWeight };