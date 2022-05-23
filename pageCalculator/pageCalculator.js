
function callbackAfterOperationButtonClick()
{

    let result;
    let operator = document.getElementById("operator").value;
    let inputs = document.getElementsByTagName("input");
    let firstInputNumber = parseFloat(inputs[0].value);
    let secondInputNumber = parseFloat(inputs[1].value);

    switch (operator)
    {
        case "+":
            return firstInputNumber + secondInputNumber;
            break;
        case "-":
            return firstInputNumber - secondInputNumber;
            break;
        case "/":
            return firstInputNumber / secondInputNumber;
            break;
        case "x":
            return firstInputNumber * secondInputNumber;
            break;
    }

    isNaN(result) ? document.getElementById("result").textContent = "A divisão por zero não é definida": document.getElementById("result").textContent = result;
};

function clearInputs()
{
    let inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++)
    {
        inputs[i].value = "0";
    };

    document.getElementById("result").textContent = "0";
};