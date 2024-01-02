const isEven = num => num % 2  == 0;

const isEvenOrOdd = num => {
    return  isEven(num) ? 'Even': 'Odd';
}

console.log(isEvenOrOdd(5));