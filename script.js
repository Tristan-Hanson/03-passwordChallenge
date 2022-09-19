// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomItem(list) {
  return list[randomNum(0, list.length-1)];
}

function generatePassword() {

  var inputLength = window.prompt("Length of password");
  var passwordLength = parseInt(inputLength);

  if (isNaN(passwordLength)) {
    window.alert("Input Must be a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length of password must be between 8 and 128 characters");
    return;
  }

  var includeNumber = window.confirm("Do you want to include numbers in the password?");
  var includeSymbol = window.confirm("Do you want to include symbols in the password?");
  var includeLower = window.confirm("Do you want to include lowercase characters in the password?");
  var includeUpper = window.confirm("Do you want to include uppercase characters in the password?");

  var numberInclude = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
  var symbolsInclude = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ","];
  var lowerInclude = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperInclude = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var passwordInclude = [];

  if (includeNumber === true) {
    passwordInclude.push(numberInclude);
  }
  if (includeSymbol === true){
    passwordInclude.push(symbolsInclude);
  }
  if (includeLower === true){
    passwordInclude.push(lowerInclude);
  }
  if (includeUpper === true){
    passwordInclude.push(upperInclude);
  }
  if (includeNumber === false && includeSymbol === false && includeLower === false && includeUpper === false){
    window.alert("Must select at least one category");
    return;
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++){
    var randomList = randomItem(passwordInclude); 
    var randomChar = randomItem(randomList);
    generatedPassword = generatedPassword += randomChar
  }

  return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


