


// leap year: if the year is divisible by 4  and not divisible by 100 the year is leap year
// if the year is divisible by 100 and 400 the year is leap year.

// very simple logic: do not work in all year

// function isleapYear(year){
//     if (year % 4 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let result = isleapYear(2030);
// console.log(result);


// logic 2

// function leapYear(year){
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return 'the year is a leap year.'
//     }
//     else{
//         return 'the year is not a leap year.'
//     }
// }
// let result1 = leapYear(2024);
// let result2 = leapYear(2100);
// console.log(result1, result2);

// function yearLeap(year){
//     if (year % 100 === 0 && year % 400 === 0) {
//         return 'the year is a leap year'
//     }else if (year % 4 === 0 && year % 100 !== 0) {
//         return 'the year is a leap year.'
//     }
//     else{
//         return 'the year is not a leap year'
//     }

// }
// let res1 = yearLeap(2100);
// let res2 = yearLeap(2150);
// let res3 = yearLeap(2000);
// let res4 = yearLeap(2024);
// console.log(res1, res2, res3, res4);