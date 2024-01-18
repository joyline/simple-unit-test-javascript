/**
    Automated Testing and Debugging:
    Here is a simple JavaScript function that has some bugs. Your task is to:
    - Write unit tests for this function using an automated testing framework of your choice.
    - Identify any bugs these tests expose, and fix them.
    - Provide the corrected function, along with your tests
 */

function addStrings(num1, num2) {
    if (typeof num1 == "string" && typeof num2 == "string") {
        return parseInt(num1) + parseInt(num2);
    } else {
        return "Input must be strings.";
    }
}

module.exports = addStrings;
    