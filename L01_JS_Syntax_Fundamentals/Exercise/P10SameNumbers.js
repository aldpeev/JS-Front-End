function solve(number){
    let arr = number.toString().split("");

    let isEqual = arr.every(e=> e === arr[0]);
    let sum = arr.map(e => parseInt(e)).reduce((a,b) => a + b, 0);

    console.log(isEqual);
    console.log(sum);
}

solve(2222222);
solve(1234);