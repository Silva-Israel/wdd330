// Function to toggle my notes for the week
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
  }
  
  document.querySelector('#menu').addEventListener('click', toggleMenu);
  

// Functions for the Team Activity
function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
        return numberFloat;
    } else return 0;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function addSomthing(a, b) {
    return a + b;
}

function performOperation(operation) {
    const total = operation(getNum('input'), getNum('secondInput'));

    if (!isNaN(total))
        document.querySelector('#sum').innerHTML = total;
    else
        document.querySelector('#sum').innerHTML = "Please enter a digit.";
}

const doSomthing = () => {
    a = parseInt(document.querySelector("#input").value);
    if (!isNaN(a)) {
        var sum = 0;
        for (var j = 1; j <= a; j++) {
            sum += j;
            console.log(j);
        }
        document.querySelector('#sum').innerHTML = sum;

    } else
        document.querySelector('#sum').innerHTML = "Please enter a digit.";
}

document.querySelector('#submit').addEventListener("click", doSomthing);
