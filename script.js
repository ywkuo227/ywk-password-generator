// Create arrays for upper case letter, lower case letter, numerics and spcial characters.
var aryCharPool = [
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!","@","#","$","%","^","&","*","(",")",".","?","+","-","_","=",";",":","<",">","~","{","}"]
];

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
  var aryUserInput = [];
  var aryGenPool = [];

  // Set system messages.
  var prmptMsg = [
    "Does your password require UPPER case character? (Y/N)",
    "Does your password require lower case character? (Y/N)",
    "Does your password require numeric character? (Y/N)",
    "Does your password require special character? (Y/N)",
    "Please enter your desired password length (8-128 characters):"
  ];
  var cfmQuitGen = "Do you wish to quit generator?"
  var alrtInputNo = "Please note the input is set to 'No'."
  var alrtCancel = "Generator will now stop.";
  var alrtNeedInput = "Please enter 'Y'es or 'N'o. (Y/N)";
  var alrtNotVldNum = "Please enter a valid number between 8-128.";

  // User input variables
  var prmptInput
  var i = 0;
  var ii;
  var quitGen;

  // Output variable. Reset upon execution.
  var outputPw = "";

  // Function to assign user input to userInput array, as well as all logic and error check.
  function assignUserInput() {
    if (i >= 0 && i <= 4) {
      prmptInput = prompt(prmptMsg[i]);
      if (prmptInput === null) {
        quitGen = confirm(cfmQuitGen);
        if (quitGen === true) {
          aryUserInput[i] = "cancel";
        } else {
          if (ii === 1) {
            if (i <= 3) {
              alert(alrtInputNo);
              aryUserInput[i] = false;
            } else if (i === 4) {
              alert("Please note the input is set to minimum password length '8' characters.");
              aryUserInput[i] = "8";
            }
            ii = 0;
          } else {
            ii = 0;
            ii ++;
            assignUserInput(i);
          }
        }
      } else if ((prmptInput === "Y") || (prmptInput === "N") || (prmptInput === "y") || (prmptInput === "n")) {
        if ((prmptInput === "Y") || (prmptInput === "y")) {
          aryUserInput[i] = true;
        } else if ((prmptInput === "N") || (prmptInput === "n")){
          aryUserInput[i] = false;
        }
      } else if ((prmptInput >= 8 && prmptInput <= 128) === true) {
        aryUserInput[i] = prmptInput;
      } else {
        if (i <= 3) {
          alert(alrtNeedInput);
        } else if (i === 4) {
          alert(alrtNotVldNum);
        }
        assignUserInput(i);
      }
    }
  }

  // Ask user for password criteria and terminate the excution if user chose to quit.
  for (i = 0; i <= 4; i++) {
    assignUserInput(i);
    if (aryUserInput[i] === "cancel") {
      alert(alrtCancel);
      return outputPw = "";
    } 
    // else if ((aryUserInput[0] === false) && (aryUserInput[1] === false) && (aryUserInput[2] === false) && (aryUserInput[3] === false)) {
    //   alert("Please select at least one character type.");
    //   i=0;
    //   assignUserInput(i);
    // } 
    else if ((i <= 3) && (aryUserInput[i] === true)) {
      for (var j = 0; j < aryCharPool[i].length; j++) {
        aryGenPool.push(aryCharPool[i][j]);
      }
    }
  }

  // Generate password.
  for (var numChar = 1; numChar <= aryUserInput[4]; numChar++) {
    var idxPwGen = Math.floor(Math.random()*aryGenPool.length);
    outputPw = outputPw + aryGenPool[idxPwGen];
  }

  // Bug checks. REMOVE BEFORE FLIGHT
  console.log(aryUserInput);
  console.log(aryGenPool);
  console.log(aryGenPool.length);
  console.log(outputPw);
  console.log(outputPw.length);

  // Output generated password.
  return outputPw;
}
