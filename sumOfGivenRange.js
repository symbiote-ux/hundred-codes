const sumOfGivenRange = (start,end,sum) => {
    if(start > end) {
        return sum;
    }
    return start +  sumOfGivenRange(start + 1,end, sum);
}

console.log(sumOfGivenRange(1,5,0));