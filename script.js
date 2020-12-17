// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var passLength = 0;
  var lowerCase = false;
  var upperCase = false;
  var numbericPass = false;
  var specialChar = false;

  var lowerArr = [
    
  ]
  var upperArr = [
    
  ]
  var numArr = [
    
  ]
  var specArr = [
    
  ]
  // all user selected characters are added to this main array to choose from
  var controlArr = [
    
  ]


  // passwordText.value = password;

  // needs length to be 8-128
  passLength = prompt("Choose a length for your password! The number must be greater than 8 but less than 128.")
  
  if (passLength >= 8 && passLength <= 128) {
    // ask user if they want lowercase, uppercase, numeric and/or special characters
    alert("You picked a good number!")
  }
    
  else {
    alert("YOU MUST PICK A NUMBER BETWEEN 8 AND 128!")
  }
  
  // needs at least 1 character type to work

  // put all characters into an 4 arrays based on character type
  // if no character is selected then a prompt should force you to

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
                                                                                            