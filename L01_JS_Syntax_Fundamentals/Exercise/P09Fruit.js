function fruit(fruit, grams, pricePerKg){
    let weightKg = grams / 1000;
    let price = weightKg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);

}

fruit('orange', 2500, 1.80);