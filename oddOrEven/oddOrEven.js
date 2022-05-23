function returnIfNumIsOddOrEvenAfterClick()
{
    let inputNumber = document.getElementById('inputNumber').value
    if(inputNumber % 2 === 0 )
    {
        window.alert("Par");
    } else {
        window.alert("Ímpar")
    };
};