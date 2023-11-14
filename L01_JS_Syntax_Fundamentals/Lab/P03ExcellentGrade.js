function isExcellent(grade){
    const ceiledGrade = grade.toFixed();

    if (+ceiledGrade === 6){
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}

isExcellent(5.50);