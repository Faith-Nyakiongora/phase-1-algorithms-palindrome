function isPalindrome(word) { 
// Write your algorithm here
  const lowerCase = word.lowerCase
  let reversed = word.split ('').reverse().join('');
  if (reversed === word) return true;

  return false;

  }



/* 
  Add your pseudocode here
In the FUNCTION isPalindrome(word);
convert and store the word in lowercase.
REVERSE the word using .SPLIT to convert in to and array of letters.
Then use .REVERSE on the array of letters then .JOIN to convert it back to a a string from an array of letters.
Use the IF reversed is strongly equal to word then should return true(is a Palindrome) else return false 
*/

/*

  Add written explanation of your solution here
  A palindrom is a word that when reversed it reads the same. Example is eye.
  therefore in the function we assigned reversed to have the word converted into a string of letters then reversed the string of letters and then converted the string of letters back to words.
  therefore if a reverserd is equal to the word given then it is true it is bassicaly a palindrom
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
