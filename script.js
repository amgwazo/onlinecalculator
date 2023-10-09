// Variables
let input = document.getElementById("input");
let details = document.getElementById("details");
let buttons = Array.from(document.getElementsByClassName("btn"));
let history = [];

// Function to update input field
function updateInput(value) {
  input.textContent += value;
}

// Function to update details field
function updateDetails(value) {
//   details.textContent += value;
details.textContent = value;
}

// Function to clear the input field
function clearInput() {
  input.textContent = "";
}

// Function to clear the details field
function clearDetails() {
  details.textContent = "";
}
//Function to clear the history array
function clearHistory(){
    history = [];
}

//Delete last entered digit
function backSpace() {
    input.textContent = input.textContent.slice(0, -1);
}

// Function to perform calculations
function calculate() {
  try {
    let expression = input.textContent;
    let result = eval(expression);
    history.push(expression + "=" + result);
    // console.log(history);
    clearInput();
    input.textContent = result;
    // input.textContent = new Intl.NumberFormat().format(result); //attempted to format the result but got undesired results on the next calculation
    // updateDetails("=" + result);
    
    updateDetails(history.join(";   "));
  } catch (error) {
    input.textContent = "Error";
  }
}

// // Event listeners for buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let value = button.textContent;

//     if (value === "C") {
//       clearInput();
//       clearDetails();
//       clearHistory();
//     } else if (value === "=") {
//       calculate();
//     } else {
//       updateInput(value);
//       updateDetails(value);
//     }
//   });
// });

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    handleInput(value);
  });
});


/** BELOW CODE is Not part of the requirement BUT I included the keyboard functionality 
 * for my own convenience as it was super frustrating using my laptop's touch-pad
 * to click on the calculator buttons, it's easier just typing the numbers and operators 
 * directly from the laptop's keyboard. I think this would be the same situation with
 *  most users too.
 */

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;
  
   if (key === 'Enter') {
        if (input.textContent === "") {
          return;
        }
     calculate();
   } else if(key === '=') {
    if(input.textContent === ''){
      return;
    }
   calculate();

  }else if (key === 'Backspace') {
    backSpace();
  } else if (!isNaN(key) || key === '.' || ['+', '-', '*', '/', '%'].includes(key)) {
    handleInput(key);
  }
});

// Function to handle input from both buttons and keyboard
function handleInput(value) {
  if (value === 'C') {
    clearInput();
    clearDetails();
    clearHistory();
    
  }   else if (value === 'DEL') {
    backSpace();
  }else if (value === '=') {
        if (input.textContent === "") {
          return;
        }
    calculate();
  } else {
    updateInput(value);
    updateDetails(value);
  }
}


