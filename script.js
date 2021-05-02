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
/*--start of total milk production---*/
let totalMilkProduction = (obj) => {
    let sum = 0;
    obj.forEach((obj) => {

        sum += obj.allCowProduction;
    });
    console.log(sum);
};

/*--start of total milk production---*/

// let totalProduction = (obj) => {
//     obj.forEach((obj) => {
//         console.log(`Your production in Shed ${obj.allCowProduction} litres per day `);
//     });
// };
// totalProduction(production);