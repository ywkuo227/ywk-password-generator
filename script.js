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
  // Set an array for all user selected character type.
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
  // Temporary variable to record user input from the prompt.
  var prmptInput
  // General index to be use in For Loop logics.
  var i = 0;
  // Flag to check if user clicked cancel twice in the alert to ask if user wish to terminate the generator.
  var ii;
  // Flag to quit generator.
  var quitGen;

  // Output variable. Reset upon execution.
  var outputPw = "";

  // Function to assign user input to userInput array, as well as all logic and error check.
  function assignUserInput() {
    if (i >= 0 && i <= 4) {
      // Prompt user to input based on the question being prompt.
      prmptInput = prompt(prmptMsg[i]);
      // If user clicked 'Cancel', ask the user wish to quit the generator.
      if (prmptInput === null) {
        quitGen = confirm(cfmQuitGen);
        // If user clicked 'OK' to quit the generator. Set the relevant user input in the aryUserInput to cancel.
        if (quitGen === true) {
          aryUserInput[i] = "cancel";
        // If user clicked 'Cancel' the termination of the generator...
        } else {
          // ...default value of false or min password lenght is assigned to the relevant position in aryUserInput if user clicked 'Cancel' twice when ask to terminate the generator.
          if (ii === 1) {
            // For the character type questions, the default value will be false.
            if (i <= 3) {
              alert(alrtInputNo);
              aryUserInput[i] = false;
            // For the password length, the default value will be 8, as in the minimum password length.
            } else if (i === 4) {
              alert("Please note the input is set to minimum password length '8' characters.");
              aryUserInput[i] = "8";
            }
            // Clear generator counter-termination flag.
            ii = 0;
          // If this is the first time user clicked 'Cancel' the termination of the generator. Set the counter-termination flag to flagged(1). Also sending the user back to the previous prompt.
          } else {
            ii = 0;
            ii ++;
            assignUserInput(i);
          }
        }
      // If user responses from the prompt are Yes or No. Assign True or False to the relevant positions in aryUserInput.
      } else if (((i >= 0) && (i <= 3)) && ((prmptInput === "Y") || (prmptInput === "N") || (prmptInput === "y") || (prmptInput === "n"))) {
        if ((prmptInput === "Y") || (prmptInput === "y")) {
          aryUserInput[i] = true;
        } else if ((prmptInput === "N") || (prmptInput === "n")){
          aryUserInput[i] = false;
        }
      // Assign the user intended password length to the relevant positions in aryUserInput.
      } else if ((i === 4) && ((prmptInput >= 8 && prmptInput <= 128) === true) && (prmptInput !== "Y") && (prmptInput !== "N") && (prmptInput !== "y") && (prmptInput !== "n")) {
          aryUserInput[i] = prmptInput;
      // Throw relevant error messages if none of the above conditions are met.
      } else {
        // Return "Need user input error for character type" prompts.
        if (i <= 3) {
          alert(alrtNeedInput);
        // Return "Need valid number for password length" prompt.
        } else if (i === 4) {
          alert(alrtNotVldNum);
        }
        // Kick the user back to the previous prompt.
        assignUserInput(i);
      }
    }
  }

  // Ask user for password criteria and terminate the excution if user chose to quit.
  for (i = 0; i <= 4; i++) {
    assignUserInput(i);
    // Check if user wish to cancel the generator execution.
    if (aryUserInput[i] === "cancel") {
      alert(alrtCancel);
      return outputPw = "";
    // Check if user failed to set at least one character type. Terminate the generator and ask the user to click Generate Password in the web app to try again.
    } else if ((aryUserInput[0] === false) && (aryUserInput[1] === false) && (aryUserInput[2] === false) && (aryUserInput[3] === false)) {
      alert("Need to select at least one character type. Please click Generate Password to try again.");
      return outputPw = "";
    // Pull all user requested character type into an array for password generation later.
    } else if ((i <= 3) && (aryUserInput[i] === true)) {
      // Pushed all of the selected character type from the character pool to the generator pool.
      for (var j = 0; j < aryCharPool[i].length; j++) {
        aryGenPool.push(aryCharPool[i][j]);
      }
    }
  }

  // Generate password in a For Loop logic.
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
