const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    // currentResult = currentResult + +userInput.value; you can use "+" right before the string
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
    const logEntry = {
        operations: "ADD",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
