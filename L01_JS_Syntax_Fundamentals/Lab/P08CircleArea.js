function circleAreaCalc (num){
    const typeOfArg = typeof(num);
    if (typeOfArg !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`)
    } else {
        console.log((num ** 2 * Math.PI).toFixed(2));
    }
}

circleAreaCalc('name');

circleAreaCalc(5);