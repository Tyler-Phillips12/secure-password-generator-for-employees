// generatePassword Function
function generatePassword() {
  // allowed chracters
  let chars =
    "abcdefghijklmnopqrstuvwxyz";
  let includeNumbers = false;

  const upperCase = prompt(
    "Do you want to include uppercase letters? (y/n)"
  ).toLowerCase();
  const specialChars = prompt(
    "Do you want to include special characters? (y/n)"
  ).toLowerCase();
  const toLowerCase = prompt(
    "Do you want to include lower case letters? (y/n)"
  ).toLowerCase();

  if (upperCase === "y") {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (specialChars === "y") {
    chars += "!@#$%^&*()_+";
  }

  if (toLowerCase === "y") {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  includeNumbers = confirm(
    "Would you like to include numeric values in your password?"
  );
  // parameter if the user wants to include numbers
  if (includeNumbers) {
    chars += "0123456789";
  }

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
    // parseInt function to return integer
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
