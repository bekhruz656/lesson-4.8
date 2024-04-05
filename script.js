const originalArray = [2, 4, 9, 10, 45, 67, 8, 90];

const evenNumbersArray = [];

for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
        evenNumbersArray.push(originalArray[i]);
    }
}

console.log(evenNumbersArray);