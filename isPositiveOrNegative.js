const isPositiveOrNegative = num => {
    if(num === 0) return 'Zero';
    return num > 0 ? 'Positive': 'Negative';
}

console.log('-5 is' ,isPositiveOrNegative(-5));
console.log('0 is' ,isPositiveOrNegative(0));
console.log('2 is' ,isPositiveOrNegative(2));