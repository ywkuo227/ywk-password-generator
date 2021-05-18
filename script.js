// Create arrays for upper case letter, lower case letter, numerics and spcial characters.
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")",".","?","+","-","_","=",";",":","<",">","~","{","}"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Set array of userInput.
  var userInput = [];

  // Set system messages.
  var cfmQuitGen = "Do you wish to quit generator?"
  var alrtInputNo = "Please note input is set to 'No'."
  var alrtCancel = "Generator will now stop.";
  var alrtNeedInput = "Please enter 'Y'es or 'N'o. (Y/N)";
  var alrtNotVldNum = "Please enter a valid number between 1-128.";

  // User input variables
  var incldUpper;
  var incldLower;
  var incldNum;
  var incldSpcl;
  var pwLength;
  var quitGen;
  var cancel = "cancel"
  
  // Function to assign upper case input and error check.
  function usrInputUpper(incldUpper = prompt("Does your password require UPPER case character? (Y/N)")) {
  
    if (incldUpper === null) {
      quitGen = confirm(cfmQuitGen);
      if (quitGen === true) {
        userInput[0] = cancel;
      } else {
        alert(alrtInputNo);
        userInput[0] = false;
      }
    } else if ((incldUpper === "Y") || (incldUpper === "N") || (incldUpper === "y") || (incldUpper === "n")) {
      if ((incldUpper === "Y") || (incldUpper === "y")) {
        userInput[0] = true;
      } else if ((incldUpper === "N") || (incldUpper === "n")){
        userInput[0] = false;
      }
    } else {
      alert(alrtNeedInput);
      usrInputUpper();
    }
  }

  // Function to assign lower case input and error check.
  function usrInputLower(incldLower = prompt("Does your password require lower case character? (Y/N)")) {
    
    if (incldLower === null) {
      quitGen = confirm(cfmQuitGen);
      if (quitGen === true) {
        userInput[1] = cancel;
      } else {
        alert(alrtInputNo);
        userInput[1] = false;
      }
    } else if ((incldLower === "Y") || (incldLower === "N") || (incldLower === "y") || (incldLower === "n")) {
      if ((incldLower === "Y") || (incldLower === "y")) {
        userInput[1] = true;
      } else if ((incldLower === "N") || (incldLower === "n")){
        userInput[1] = false;
      }
    } else {
      alert(alrtNeedInput);
      usrInputLower();
    }

  }

  // Function to assign number input and error check.
  function usrInputNum(incldNum = prompt("Does your password require numeric character? (Y/N)")) {
    
    if (incldNum === null) {
      quitGen = confirm(cfmQuitGen);
      if (quitGen === true) {
        userInput[2] = cancel;
      } else {
        alert(alrtInputNo);
        userInput[2] = false;
      }
    } else if ((incldNum === "Y") || (incldNum === "N") || (incldNum === "y") || (incldNum === "n")) {
      if ((incldNum === "Y") || (incldNum === "y")) {
        userInput[2] = true;
      } else if ((incldNum=== "N") || (incldNum === "n")){
        userInput[2] = false;
      }
    } else {
      alert(alrtNeedInput);
      usrInputNum();
    }

  }

  // Function to assign special character input and error check.
  function usrInputSpcl(incldSpcl = prompt("Does your password require special character? (Y/N)")) {
    
    if (incldSpcl === null) {
      quitGen = confirm(cfmQuitGen);
      if (quitGen === true) {
        userInput[3] = cancel;
      } else {
        alert(alrtInputNo);
        userInput[3] = false;
      }
    } else if ((incldSpcl === "Y") || (incldSpcl === "N") || (incldSpcl === "y") || (incldSpcl === "n")) {
      if ((incldSpcl === "Y") || (incldSpcl === "y")) {
        userInput[3] = true;
      } else if ((incldSpcl=== "N") || (incldSpcl === "n")){
        userInput[3] = false;
      }
    } else {
      alert(alrtNeedInput);
      usrInputSpcl();
    }

  }

  // Function to assign password length and error check.
  function usrInputPwLgth(pwLength = prompt("Please enter your desired password length (8-128 characters):")) {

    if (pwLength === null) {
      quitGen = confirm(cfmQuitGen);
      if (quitGen === true) {
        userInput[4] = cancel;
      } else {
        alert(alrtInputNo);
        userInput[4] = false;
      }
    } else if ((pwLength >= 8 && pwLength <= 128) === true) {
      userInput[4] = pwLength;
    } else {
      alert(alrtNotVldNum);
      usrInputPwLgth();
    }

  }

  usrInputUpper();
  
  if (userInput[0] === cancel) {
    alert(alrtCancel);
    return;
  } else {
    usrInputLower();
  }

  if (userInput[1] === cancel) {
    alert(alrtCancel);
    return;
  } else {
    usrInputNum();
  }

  if (userInput[2] === cancel) {
    alert(alrtCancel);
    return;
  } else {
    usrInputSpcl();
  }

  if (userInput[3] === cancel) {
    alert(alrtCancel);
    return;
  } else {
    usrInputPwLgth();
  }

  if (userInput[4] === cancel) {
    alert(alrtCancel);
    return;
  }

  // Checkpoint. REMOVE BEFORE FLIGHT
  console.log(userInput);

}