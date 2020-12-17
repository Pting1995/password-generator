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
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ]
  var upperArr = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  ]
  var numArr = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
  ]
  var specArr = [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "'", "<", ">", ",", ".", "?",
  ]

  // all user selected characters are added to this main array to choose from
  var controlArr = [
    
  ]
  
  // RNG
  function rngGen() {
    return Math.floor(Math.random() * (controlArr.length + 1))
  }

  // passwordText.value = password;

  // needs length to be 8-128
  passLength = prompt("Choose a length for your password! The number must be greater than 8 but less than 128.")
  
  if (passLength >= 8 && passLength <= 128) {
    // checks if user wants lower case
    lowerCase = confirm("Do you want lower case characters? There are " + lowerArr.length + " lower case characters.")
    if (lowerCase === true) {
      // adds lowercase to controlArr
      controlArr = lowerArr
    }

    // checks if user wants upper case
    upperCase = confirm("Do you want upper case characters? There are " + upperArr.length + " upper case characters.")
    if (upperCase === true) {
      // add uppercase to controlarr
      controlArr = controlArr.concat(upperArr)
    }

    // checks if user wants numeric case
    numbericPass = confirm("Do you want numberic characters?There are " + numArr.length + " numeric characters.")
    if (numbericPass === true) {
      // add numbers to controlarr
      controlArr = controlArr.concat(numArr)
    }

    // checks if user wants special case
    specialChar = confirm("Do you want special characters? There are " + specArr.length + " special characters")
    if (specialChar === true) {
      // add special characters to controllarr
      controlArr = controlArr.concat(specArr)
    }
    
    // alert for if someone denys all character types
    if (lowerCase === false && upperCase === false && numbericPass === false && specialChar === false) {
      alert("You need to select at least one character type!")
    }

    // character generator
    for (i = 0; i < passLength.length; i++) {
      var randomNum = rngGen()
      
    }
  }
    
  else {
    alert("YOU MUST PICK A NUMBER BETWEEN 8 AND 128!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
                                                                                            