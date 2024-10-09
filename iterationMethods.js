/** 
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
*/

const numbers = [10, 13, 20, 25, 38, 35, 40];
const greaterThanOrEqual25 = numbers.filter((number) => number >= 25);
console.log(greaterThanOrEqual25);

const divisibleBy5 = numbers.filter((number) => number % 5 === 0);
console.log(divisibleBy5);

/**
Part 2: Mapping

Write code to perform the following tasks using the map method:
3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
*/

const squaredArray = numbers.map((num) => num * num);
console.log(squaredArray);

const multipliedByTwo = numbers.map((num) => num * 2);
console.log(multipliedByTwo);

/**
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
*/

const greaterThanOrEqual20 = numbers.filter((number) => number >= 20);
const squaredGreaterThan20 = greaterThanOrEqual20.map((num) => num * num);
console.log(squaredGreaterThan20);

const divisBy5 = numbers.filter((number) => number % 5 === 0);
const multipliedByThree = divisBy5.map((num) => num * 3);
console.log(multipliedByThree);

/**
Part 4: Extra not required 🌶️🌶️🌶️
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
*/

const listOfNums = [1, 2, 3, 4, 55];
function logger(listOfNums) {
  listOfNums.forEach((num) => console.log(num));
  //   return listOfNums;
}
console.log(logger(listOfNums));

/** toCelsius(temperatures)
 *
 * - Accepts an array of temperatures in degrees Fahrenheit
 * - Returns an array of temperatures in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 */
const tempF = [90, 70, 88, 122];
function toCelsius(tempF) {
  return tempF.map((temp) => (temp - 32) * (5 / 9));
}
console.log(toCelsius(tempF));

/**
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 */
const temps = [55, 60, 57, 45, 48];
const threshhold = 50;
function hottestDays(temps, threshhold) {
  return temps.filter((num) => num > threshhold);
}
console.log(hottestDays(temps, threshhold));

/**
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the threshhold to the console
 *   IN DEGREES CELSIUS

 * hint: you can combine all previous functions
*/
const tempsInFah = [89, 55, 104, 99, 44];
const tempThreshhold = 60;
function logHottestDays(tempsInFah, tempThreshhold) {
  const filteredTemp = hottestDays(tempsInFah, tempThreshhold);
  const tempInC = toCelsius(filteredTemp);
  console.log(tempInC);
  return tempInC;
}
