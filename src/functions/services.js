import historicalFacts from '../dataBase/facts.js';

function serviceSearchFactPerYear(year) {
    const factSelected = historicalFacts.find((fact) => {
        return fact.year === year;
    });
    return factSelected.fact;
}

export default serviceSearchFactPerYear;
