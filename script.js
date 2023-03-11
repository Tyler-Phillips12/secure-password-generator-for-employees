// generatePassword Function
function generatePassword() {
  // allowed chracters
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let password = "";
  let passwordLength = 0;

  // loop for password length between 128 and 8 chracters
  while (passwordLength < 8 || passwordLength > 128) {
    password = "";
    passwordLength = prompt(
      "Please enter the desired length of your password (between 8 and 128 chracters)"
    );

    // If the employee clicks "cancel" or enters a restriced value it will return an empty string
    if (passwordLength === null || isNaN(passwordLength)) {
      return "";
    }
    // pareInt function to return integer
    passwordLength = parseInt(passwordLength, 10);
    // setting parameters for password length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 chracters.");
    }
  }

  // If statement to generate random password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    const randomChar = chars[randomIndex];
    password += randomChar;
  }

  return password;
}
// writePassword function
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
