const convertDigitsToWords = (number) => {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    '',
    'eleven',
    'tweleve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninenty',
  ];
  let result = '';

  if (number === 0) return 'Zero';
  const digitList = number.toString().split('').map(Number);
  if (digitList.length > 4)
    return 'Number more than 4 digits are not supported';

  if (digitList.length === 4) {
    result += ones[digitList[0]] + ' thousand ';
    digitList.shift();
  }
  if (digitList.length === 3) {
    result += ones[digitList[0]] + ' hundred ';
    digitList.shift();
  }
  if (digitList.length === 2) {
    if (digitList[0] === 1 && digitList[1] !== 0) {
      result += teens[digitList[1]] + ' ';
      digitList.splice(0, 2);
    } else {
      result += tens[digitList[0]] + ' ';
      digitList.shift();
    }
  }
  if (digitList.length === 1 && digitList[0] !== 0) {
    result += ones[digitList[0]] + ' ';
    digitList.shift();
  }

  return result.trim().charAt(0).toUpperCase() + result.trim().slice(1);
};

console.log(convertDigitsToWords(5678));
