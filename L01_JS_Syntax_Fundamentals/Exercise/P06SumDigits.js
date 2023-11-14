function solve(input){
    let result = input.toString().split("").map(e => parseInt(e)).reduce((a,b) => a + b, 0);
    console.log(result);
}

solve(97561);
solve(543);