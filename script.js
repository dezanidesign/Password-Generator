// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'

];
var answer = prompt("How many uppercase characters would you like your password to contain?");
var answerSpecial = confirm("Click OK to confirm including special characters");
var answerNumeric = confirm("Click OK to confirm including numeric characters");
var answerLowercase = confirm("Click OK to confirm including lowercase characters");
var answerUppercase = confirm("Click OK to confirm including uppercase characters");

// Function to prompt user for password options
function getPasswordOptions() {

var finalOptions = '';
generatePassword(finalOptions);

return answer;
}

console.log(getPasswordOptions());
//console.log(Math.floor(Math.random() * specialCharacters.length)) //Test code- This is how we randomly select letters
//from each array 
var letters = []


// Function for getting a random element from an array
// HZ: Some variation of math.random to randomly select symbols from above.
function getRandom(arrU, arrS, arrN, arrL) 
{for (i = 0; i < answer; i++) {
  var x = Math.floor(Math.random() * arrU.length);
    letters.push(arrU[x])
  }

  var y = Math.floor(Math.random() * arrS.length);
if (answerSpecial == true){
  console.log(arrS[y])
}



var z = Math.floor(Math.random() * arrN.length);
if (answerNumeric == true){
  console.log(arrN[z])
}

var a = Math.floor(Math.random() * arrL.length);
if (answerLowercase == true){
  console.log(arrL[a])
}


console.log(letters.join('') + arrS[y] + arrN[z] + arrL[a])

var pass = []



// console.log(pass.join(''));

 console.log(pass.toString());

 
 
}

getRandom(upperCasedCharacters, specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);

// function end


// Function to generate password with user input
function generatePassword() {
var password = ''
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);