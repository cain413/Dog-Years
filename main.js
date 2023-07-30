// constant variable of my age
const myAge = 30;
// reassignment of dog years
let earlyYears = 2;

earlyYears *= 10.5;
// later years of a dog with reassignable variable of (myAge - 2)
let laterYears = myAge - 2;
// later years multiplied by 4
laterYears *= 4;
// my age in dog years
const myAgeInDogYears = earlyYears + laterYears;
// returns my name in lower case
const myName = "Cain" .toLowerCase();
// logs my name, my age, and my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
