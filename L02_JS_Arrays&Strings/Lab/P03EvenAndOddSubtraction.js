function sumEvenAndOdd(arr){
    let evenSum = arr.filter(e => e % 2 === 0).reduce((a,b) => a + b, 0);
    let oddSum = arr.filter(e => e % 2 !== 0).reduce((a,b) => a + b, 0);

    console.log(evenSum - oddSum);
}

sumEvenAndOdd([1,2,3,4,5,6]);