const greaterOfTwo = (num1, num2) => {
    if(num1 === num2) console.log('Both are equal');
    else console.log(Math.max(num1, num2), 'is greater');
}

greaterOfTwo(5,5);