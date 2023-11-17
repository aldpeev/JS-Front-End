function rotate(arr, rotations){

    for (let index = 0; index < rotations; index++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(" "));

}

rotate([51, 47, 32, 61, 21], 2);