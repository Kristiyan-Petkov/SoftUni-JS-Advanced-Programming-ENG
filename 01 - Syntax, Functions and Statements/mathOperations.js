function mathOperations(numA, numB, action){
    // '+', '-', '*', '/', '%', '**'
    let result;
    switch (action){
        case "+":
            result = numA + numB;
            break;
        case "-":
            result = numA - numB;
            break;
        case "*":
            result = numA * numB;
            break;
        case "/":
            result = numA / numB;
            break;
        case "%":
            result = numA % numB;
            break;
        case "**":
            result = numA**numB;
            break;
    }
    console.log(result);
}
mathOperations(3, 5.5, '*')