function simplifyAnswer(newPoly, divisor, lastNum) {
    if (Number.isNaN(newPoly[newPoly.length - 1]) && newPoly[newPoly.length - 2] === 0) {
        newPoly.pop(newPoly[newPoly.length - 1])
        newPoly.pop(newPoly[newPoly.length - 2])
    }

    if (Number.isNaN(newPoly[newPoly.length - 1]) && newPoly[newPoly.length - 2] != 0) {
        newPoly.pop(newPoly[newPoly.length - 1])
        newPoly.pop(newPoly[newPoly.length - 1])
        newPoly.push(lastNum + " / " + "x - " + divisor);
    }

    return newPoly;

}