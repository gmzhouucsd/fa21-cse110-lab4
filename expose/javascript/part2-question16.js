let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(cars in statistics) {
    if (cars.charAt(0) == 'r' || statistics[cars] % 2) {
        console.log(statistics[cars]);
    }
}