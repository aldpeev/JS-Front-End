function solve(arr, step){

    let resultArr = [];
    for (let index = 0; index < arr.length; index+= step) {
        resultArr.push(arr[index]);
    }

    return resultArr;
}

solve(['5', '20', '31', '4', '20'], 2);