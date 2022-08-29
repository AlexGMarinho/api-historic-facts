import express from 'express';
import serviceSearchFactPerYear from './functions/services.js';
import validServiceYear from './functions/validator.js';

const app = express();

app.get('/', (req, res) => {
    const { year } = req.query;

    if (validServiceYear(year)) {
        const fact = serviceSearchFactPerYear(year);

        return res.json({ fact: fact });
    }

    return res.status(400).json({ Message: 'Invalid year' });
});

app.listen(8080, () => {
    console.log(`Server startd on http://localhost:8080 🏆`);
});
