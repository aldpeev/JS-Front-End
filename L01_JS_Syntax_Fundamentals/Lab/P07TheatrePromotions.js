function theatrePromotion(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!")
    } else {
        let ageGroup;
        if (age <= 18) {
            ageGroup = "teenager";
        } else if (age <= 64) {
            ageGroup = "middleage";
        } else {
            ageGroup = "pensioner";
        }

        let priceTicket;
        switch (day) {
            case "Weekday":
                if (ageGroup === "teenager" || ageGroup === "pensioner") {
                    priceTicket = 12;
                } else {
                    priceTicket = 18;
                }
                break;
            case "Weekend":
                if (ageGroup === "teenager" || ageGroup === "pensioner") {
                    priceTicket = 15;
                } else {
                    priceTicket = 20;
                }
                break;
            case "Holiday":
                if (ageGroup === "teenager") {
                    priceTicket = 5;
                } else if (ageGroup === "middleage") {
                    priceTicket = 12;
                } else {
                    priceTicket = 10;
                }
                break;
        }

        console.log(priceTicket + "$")
    }
}

theatrePromotion('Weekday', 42);
theatrePromotion('Holiday', -12);
theatrePromotion('Holiday', 15);