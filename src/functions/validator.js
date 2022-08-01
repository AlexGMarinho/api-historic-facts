function validServiceYear(year) {
    if (isNaN(year)) {
        return false;
    } {
        if (year >= 1920 && year <= 2022) {
            return true;
        }
        return false;
    }
}

export default validServiceYear;
