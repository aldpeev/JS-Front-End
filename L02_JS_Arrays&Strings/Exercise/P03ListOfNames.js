function sortNames(arrNames){
    arrNames.sort();

    for (let index = 0; index < arrNames.length; index++) {
        console.log(`${index + 1}.${arrNames[index]}`);
    }
}