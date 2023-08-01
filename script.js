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
  if (length < 8 || length > 128) {alert("Invalid password, Enter proper length")
  return;
  }
  if (!lowerCase && !upperCase && !numbers && !specialChars) {alert("Must select at least one option")
  return;
  }
  var password = generatePassword(length, lowerCase, upperCase, numbers, specialChars )
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  }
  function generatePassword(length, lowerCase, upperCase, numbers, specialChars ) {
    var characters ="";
  if (lowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    characters += "0123456789";
  }
  if (specialChars) {
    characters += "!@#$%^&*()_+";
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
