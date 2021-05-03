let priceOfMilkPerLitre = 45; //price of milk/litre in ksh
//start of shed infomations
const sheds = [
  {
    shadeName: "shade A",
    dailyProductionPerCow: 10,
    numberOfCows: 51,
    breed: "jersey",
  },
  {
    shadeName: "shade B",
    dailyProductionPerCow: 15.4,
    numberOfCows: 20,
    breed: "Guernsey",
  },
  {
    shadeName: "shade C",
    dailyProductionPerCow: 16.2,
    numberOfCows: 30,
    breed: "Friesian ",
  },
  {
    shadeName: "shade D",
    dailyProductionPerCow: 14.3,
    numberOfCows: 40,
    breed: "Simmental ",
  },
];
//end of shed information
/* --start of total milk production per shed function--*/
const newObj = (obj) => {
  let all;
  for (let i = 0; i < obj.length; i++) {
    obj[i].allCowProduction =
      obj[i].dailyProductionPerCow * obj[i].numberOfCows; //  new object with total milk production per shed
    all =
      obj[i]
        .allCowProduction; /*   total milk production by all cows per shed; */
  }
  return all;
};
newObj(sheds);
/* --end of total milk per shed function--*/
/* --start of total milk production in all sheds---*/
const totalMilkProduction = (obj) => {
  let sum = 0;
  obj.forEach((obj) => {
    sum += obj.allCowProduction;
  });
  return sum;
};

/* --end of total milk production in all sheds---*/

/* --start of total milk production report function---*/

const totalProduction = (obj) => {
  obj.forEach((obj) => {
    console.log(
      `Your production in Shed ${obj.allCowProduction} litres per day `
    );
  });
  const total = totalMilkProduction(obj);
  console.log(`The total production is ${total} litres per day`);
};
totalProduction(sheds); //
/* --end of total milk production report function---*/
const monthsOfTheYear = {
  // months and number of days of the year
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
//start of weekly milk production in all sheds function
let weeklyProduction = (obj) => {
  let total = totalMilkProduction(obj);
  let totalDaysWeekly = 7;

  return total * totalDaysWeekly;
};

//end of weekly milk production in all sheds function

//start of yearly milk production  in all sheds function
let yearlyFunction = (obj, product) => {
  let total = totalMilkProduction(product);
  let multiplication;
  for (let values of Object.values(obj)) {
    multiplication = values * total;
  }
  return multiplication;
};

//end of monthly milk production earnings in all sheds function

//start of weekly and yearly income report
let incomeOverTime = (selling_price, time) => {
  if (time == "weekly") {
    console.log(
      `Your weekly income will be Ksh ${
        weeklyProduction(sheds) * selling_price
      }`
    );
  } else if ("yearly") {
    console.log(
      `Your yearly income will be Ksh ${
        yearlyFunction(monthsOfTheYear, sheds) * selling_price
      }`
    );
  }
};
incomeOverTime(priceOfMilkPerLitre, "weekly");
incomeOverTime(priceOfMilkPerLitre, "yearly");
//end of weekly and yearly income report
//start of monthly  milk production earnings report
let monthEarnings = (selling_price, month, product) => {
  let total = totalMilkProduction(product);
  let multiplication;
  for (let [keys, values] of Object.entries(month)) {
    multiplication = values * total * selling_price;
    console.log(`Your income for ${keys} is ksh ${multiplication}`);
  }
};
monthEarnings(priceOfMilkPerLitre, monthsOfTheYear, sheds);
