let currentNumber = "";
let firstNumber = "";
let operator = "";

function inputNumber(number) {
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    currentNumber += number;
    document.getElementById("display").textContent = currentNumber;
}

function chooseOperator(op) {
    if (currentNumber === "") return;

    firstNumber = currentNumber;
    operator = op;
    currentNumber = "";
}

function calculate() {
    if (firstNumber === "" || currentNumber === "") return;

    let a = Number(firstNumber);
    let b = Number(currentNumber);
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    }

    currentNumber = result.toString();
    firstNumber = "";
    operator = "";

    document.getElementById("display").textContent = currentNumber;
}

function clearDisplay() {
    currentNumber = "";
    firstNumber = "";
    operator = "";

    document.getElementById("display").textContent = "0";
}

function toggleSign() {
    if (currentNumber === "") return;

    currentNumber = (Number(currentNumber) * -1).toString();
    document.getElementById("display").textContent = currentNumber;
}

function percent() {
    if (currentNumber === "") return;

    currentNumber = (Number(currentNumber) / 100).toString();
    document.getElementById("display").textContent = currentNumber;
}