const poly = new Array();
let divisorIn;

function submitTerms() {
    const termInput = Number(document.getElementById("termInput").value);
    document.getElementById("termInput").value = "";
    poly.push(termInput);
    document.getElementById("polyGiven").textContent = "Polynomial Given: ["+poly+"]";
}

function deleteTerms() {
    poly.pop();
    document.getElementById("polyGiven").textContent = "Polynomial Given: ["+poly+"]";
}

function submitDivisor() {
    divisorIn = Number(document.getElementById("divisorInput").value);
    document.getElementById("divisorGiven").textContent = "Divisor: "+divisorIn;
}

function compute() {
    const computeValue = new SyntheticDivision(poly, divisorIn);
    const answer = computeValue.returnNewPoly();
    const finalAnswer = simplifyAnswer(answer, divisorIn, answer[answer.length - 2])
    document.getElementById("newPolynomial").textContent = "New Polynomial: " + finalAnswer;
}