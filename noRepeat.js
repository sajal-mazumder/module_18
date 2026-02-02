

function noRepeat(numbers){
    // console.log(numbers); // access the array
    let noRepeat = [];
    for(number of numbers){
        if (noRepeat.includes(number) === false) { 
            // console.log(noRepeat);
            noRepeat.push(number);
            // console.log(noRepeat); // output as loop 
        }
    }
    // console.log(noRepeat); // [ 2, 3, 4 ]
    return noRepeat;
}

let names = ['sajal','borsa', 'sajal', 'avi', 'nilu', 'sajal', 'mukta', 'shanta' ]
let numbers = [2, 3, 4,3]
let unique = noRepeat(names);
// let unique = noRepeat(numbers);
console.log('result of unique array is : ', unique);