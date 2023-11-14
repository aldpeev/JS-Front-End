function calc(num1, num2, operand) {
    let result;

    switch (operand) {
        case "-":
            result = num1 - num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "/":
            result =  num1 / num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }

    console.log(result);
}

calc(3, 5.5, '*');
calc(5, 6, '+');