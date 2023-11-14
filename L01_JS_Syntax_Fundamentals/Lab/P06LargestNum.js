function largestNum(num1, num2, num3){
    let largest = [num1, num2, num3].sort((a,b) => a - b)[2];
    console.log(`The largest number is ${largest}.`);
}

largestNum(-3, -5, -22.5);
largestNum(5, -3, 16);
