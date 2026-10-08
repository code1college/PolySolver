class SyntheticDivision {
    constructor(polynomial, divisor) {
        this.polynomial = polynomial;
        this.divisor = divisor;
    }

    returnNewPoly() {
        const newPoly = [];
        newPoly.push(this.polynomial[0]);

        for (let i = 0; i < this.polynomial.length; i++) {
            const newTerm = (newPoly[i] * this.divisor) + this.polynomial[i + 1];
            newPoly.push(newTerm);
        }

        return newPoly
    }
}