

/**
 * take an array as function parameter and filter its odd numbers
 * calculate me the average of the odd numbers
 */



function oddAverage(numbers){
    // console.log(numbers); // access the array
    // to get elements of array
    let odds = []; // put the odd numbers in the array
    for(number of numbers){
        // console.log(number); // access the elements separately
        if (number %  2 === 1) {
            // console.log(number); // access all odd numbers
            odds.push(number);
        }
    }
    // console.log(odds); // create a new array using odd numbers only

    // new for loop over odds only
    let sum = 0;
    let avg = 0;
    for(number of odds){
        sum = sum + number; 
        // console.log(sum); // output sum id every loop
        avg = sum / odds.length; 
        // console.log(avg); // output in every loop
    }
    return avg;
    // console.log(sum);  // sum for one time
    // console.log(odds.length); // access the odds array length
    // console.log(avg);
}
let numbers = [2, 1, 3, 5, 4, 6, 7, 8, 5, 9];
let avg = oddAverage(numbers);
// console.log( 'average of the odd number of existing array is : ', avg);


// function evenNumbers(numbers){
//     // console.log(numbers) // returns full array names nums2;
//     let evens = [];
//     let sum = 0;
//     for(let num of numbers){
//         if (num % 2 === 0) {
//             // console.log(num); // access all even numbers elements separately
//             evens.push(num);
//             sum = sum + num;
//         } 
//     } 
//     // return evens;
//     return sum;
// }

// let nums2 = [2, 3, 4, 5, 6, 7];
// let sum = evenNumbers(nums2);
// let evens = evenNumbers(nums2);
// // console.log( 'array of even numbers :', evens);
// console.log('sum of even numbers :', sum)

// average of even numbers in an array

function evenArray (numbers){
    // console.log(numbers1); // access the array named numbers1
    let evens = [];
    for(number of numbers){
        // console.log(number); // access the elements separately 
        if (number % 2 === 0) {
            // console.log(number); // access even numbers in the array
            evens.push(number);
        }
    }
    // console.log(evens); // put even numbers in new array
    let sum = 0;
    let avgEven = 0;
    let count = evens.length;
    for(number of evens){
        // console.log(number); // access the even numbers separately
        sum = sum + number;
        avgEven = sum / count;
    }
    return avgEven;
    // console.log(count);
    // console.log(sum);
}

let numbers1 = [1, 2, 3, 4, 555, 6, 12, 22, 8, 9];
let avgEven = evenArray(numbers1);
console.log('average of the even numbers of the existing array is : ', avgEven);