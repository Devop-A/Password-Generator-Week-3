// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Length 8-128 characters");
  var lowerCase = confirm('Lowercase?');
  var upperCase = confirm("Uppercase?");
  var numbers = confirm("Numbers?");
  var specialChars = confirm("Include special characters?");






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
