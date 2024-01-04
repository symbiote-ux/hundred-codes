const isPalindrome = (string) => {
  const temp = string;
  let i = 0;
  let j = temp.length - 1;

  while (j > i) {
    if (string[i] !== temp[j]) return false;
    i++;
    j--;
  }
  return true;
};

console.log("aa11211aa is palindrome", isPalindrome("aa11211aa"));
