let uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChars = ["!", "#", "@", "$", "&", "_"];
let charOptions = [];

document
  .getElementById("generate")
  .addEventListener("click", function promptUser() {
    var password = "";
    var pwLength = Number(
      prompt("Choose between 8 and 128 characters by typing the number here:")
    );
    if (pwLength < 8 || pwLength > 128) {
      alert("Your password needs to be between 8 and 128");
      promptUser();
    } else {
      var chooseUppercaseChars = confirm(
        "Do you want uppercase letters in your password?"
      );
      var chooseLowercaseChars = confirm(
        "Do you want lowercase letters in your password?"
      );
      var chooseNumbers = confirm("Do you want numbers in your password?");
      var chooseSpecialChars = confirm(
        "Do you want special characters in your password?"
      );
    }

    if (chooseUppercaseChars) {
      charOptions = charOptions.concat(uppercaseLetters);
    }
    if (chooseLowercaseChars) {
      charOptions = charOptions.concat(lowercaseLetters);
    }
    if (chooseNumbers) {
      charOptions = charOptions.concat(numbers);
    }
    if (chooseSpecialChars) {
      charOptions = charOptions.concat(specialChars);
    }
    console.log(typeof pwLength);
    for (let i = 0; i < pwLength; i++) {
      var randomNumber = Math.floor(Math.random() * charOptions.length);
      password += charOptions[randomNumber];
      document.getElementById("password").innerHTML = password;
    }
  });

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
