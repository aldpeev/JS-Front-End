function solve(peopleCount, type, dayOfWeek) {
    let basePricePerOnePerson;
    let totalPrice;

    switch (dayOfWeek) {
        case "Friday":
            switch (type) {
                case "Business":
                    basePricePerOnePerson = 10.90;
                    break;
                case "Regular":
                    basePricePerOnePerson = 15;
                    break;
                default:
                    basePricePerOnePerson = 8.45;
                    break;
            }
            break;
        case "Saturday":
            switch (type) {
                case "Business":
                    basePricePerOnePerson = 15.60;
                    break;
                case "Regular":
                    basePricePerOnePerson = 20;
                    break;
                default:
                    basePricePerOnePerson = 9.80;
                    break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Business":
                    basePricePerOnePerson = 16;
                    break;
                case "Regular":
                    basePricePerOnePerson = 22.50;
                    break;
                default:
                    basePricePerOnePerson = 10.46;
                    break;
            }
            break;
    }

    if (type === "Students" && peopleCount >= 30) {
        totalPrice = (basePricePerOnePerson * peopleCount) * 0.85;
    } else if (type === "Business" && peopleCount >= 100) {
        totalPrice = basePricePerOnePerson * (peopleCount - 10);
    } else if (type === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = (basePricePerOnePerson * peopleCount) * 0.95;
    } else {
        totalPrice = basePricePerOnePerson * peopleCount;
    }

    console.log("Total price: " + totalPrice.toFixed(2));

}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");