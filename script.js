// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //set up empty array, password length, and character parameter variables
  const passwordArray = [];
  let passwordLength, hasLowercase, hasUppercase, hasNumbers, hasSpecials;

  //asks user how many characters and checks for valid input
  for (var i = 0; i < 1; i++) {
    passwordLength = prompt("How many characters do you want your password to contain? (Your password must contain between 8 and 128 characters).");
    console.log(passwordLength);

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("You must enter a valid number of characters! (8 - 128).");
      i--;
    }
  }

  //booleans for other character parameters and checks at least one is selected
  for (var i = 0; i < 1; i++) {
    hasLowercase = confirm("Do you want your password to include lowercase letters?");
    console.log(hasLowercase);

    hasUppercase = confirm("Do you want your password to include uppercase letters?");
    console.log(hasUppercase);

    hasNumbers = confirm("Do you want your password to include numbers?");
    console.log(hasNumbers);

    hasSpecials = confirm("Do you want your password to include special characters?");
    console.log(hasSpecials);

    if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecials) {
      alert("You must select at least one parameter to generate a password!")
      i--;
    }
  }

  alert("Thank you! Generating password...")

  //adds lowercase letters using ascii values to array
  if (hasLowercase) {
    for (var i = 97; i < 123; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
  }

  //adds uppercase letters using ascii values to array
  if (hasUppercase) {
    for (var i = 65; i < 91; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
  }

  //adds digits 0-9  using ascii values to array
  if (hasNumbers) {
    for (var i = 48; i < 58; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
  }

  //adds special characters using ascii values to array
  if (hasSpecials) {
    for (var i = 33; i < 48; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
    for (var i = 58; i < 65; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
    for (var i = 91; i < 97; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
    for (var i = 123; i < 127; i++) {
      const asciiCode = String.fromCharCode(i);
      passwordArray.push(asciiCode);
    }
  }

  console.log(passwordArray);


  password = "ABBY BOMBERGER SUCKS TOES";
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


