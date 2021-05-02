const production = [{
        shadeName: 'shade A',
        dailyProductionPerCow: 10,
        numberOfCows: 51,
        breed: 'jersey',
    },
    {
        shadeName: 'shade B',
        dailyProductionPerCow: 15.4,
        numberOfCows: 20,
        breed: 'Guernsey',
    },
    {
        shadeName: 'shade C',
        dailyProductionPerCow: 16.2,
        numberOfCows: 30,
        breed: 'Friesian ',


    },
    {
        shadeName: 'shade D',
        dailyProductionPerCow: 14.3,
        numberOfCows: 40,
        breed: 'Simmental ',
    },
];
/*--start of total milk production per shed function--*/
const newObj = (obj) => {
    let all;
    for (let i = 0; i < obj.length; i++) {
        obj[i].allCowProduction = obj[i].dailyProductionPerCow * obj[i].numberOfCows;
        all = obj[i].allCowProduction; /*   total milk production by all cows per shed; */
    }
    return all;
};
newObj(production);
/*--end of total milk per shed function--*/