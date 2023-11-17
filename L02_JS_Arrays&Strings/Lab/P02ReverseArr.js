function reverseArr(slice, arr){
    let slicedArr = arr.slice(0, slice);

    console.log(slicedArr.reverse().join(" "));
    
}

reverseArr(3, [10, 20, 30, 40, 50]);