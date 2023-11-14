function ages(age) {
    if (age < 0) {
        console.log("out of bounds")
    } else {
        let ageGoup;

        if (age <= 2) {
            ageGoup = "baby";
        } else if (age <= 13) {
            ageGoup = "child";
        } else if (age <= 19) {
            ageGoup = "teenager";
        } else if (age <= 65) {
            ageGoup = "adult";
        } else {
            ageGoup = "elder";
        }

        console.log(ageGoup);
    }
}

ages(20);
ages(1);
ages(100);
ages(-1);