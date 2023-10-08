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
  details.textContent += value;
}

// Function to clear the input field
function clearInput() {
  input.textContent = "";
}

// Function to clear the details field
function clearDetails() {
  details.textContent = "";
}

// Function to perform calculations
function calculate() {
  try {
    let expression = input.textContent;
    let result = eval(expression);
    history.push(expression + "=" + result);
    clearInput();
    input.textContent = result;
    updateDetails("=" + result);
  } catch (error) {
    input.textContent = "Error";
  }
}

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      clearInput();
      clearDetails();
    } else if (value === "=") {
      calculate();
    } else {
      updateInput(value);
      updateDetails(value);
    }
  });
});


// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;
  
  if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    clearInput();
    clearDetails();
  } else if (!isNaN(key) || key === '.' || ['+', '-', '*', '/', '%'].includes(key)) {
    handleInput(key);
  }
});

// Function to handle input from both buttons and keyboard
function handleInput(value) {
  if (value === 'C') {
    clearInput();
    clearDetails();
  } else if (value === '=') {
    calculate();
  } else {
    updateInput(value);
    updateDetails(value);
  }
}



// let input = document.getElementById('display');
// let history = document.getElementById('history');
// let buttons = Array.from(document.getElementsByClassName('btn'));

// let operator = '';
// let data = [];

// let clearData = () => {
//     data = [];
//     operator = "";
//     input.textContent = data.join('');
//     // history.textContent = data.join('');
// }

// buttons.forEach( (button) => {
//     button.addEventListener('click', (e) => {

//         let buttonText = e.target.textContent;

//         if (buttonText === '=') {
//             if(input.textContent === '') return;

//             if(isNaN(parseInt(data[data.length - 1]))) {
//                 console.log(data);
//                 // data.pop();
//                 console.log(data);
//             }

//             data.push(input.textContent);
//             let result = eval(data.join(' '));
//             history.textContent = `${data.join(' ')} =  ${result}`;
//             input.textContent = result;
//             clearData();
//         }else if(buttonText === 'AC'){
//             clearData();
//             history.textContent = '';

//         }else if(buttonText === 'DEL'){
//             input.textContent = input.textContent.slice(0, -1);
//         } else if(buttonText === '.')
//             !input.textContent.includes('.') ? input.textContent += buttonText.target.textContent : '';

//      else if(input.textContent === '' && isNaN(parseInt(buttonText)) && data.length > 0 && isNaN(parseInt(data[data.length-1]))){
//         //replace previous operator if user clicks on consecutive operator
//                      data.pop();
//                     // data.length = data.length - 1;
//                     data.push(buttonText);
//                     // input.textContent = "";
//                     console.log(data);
//      }
//      else if (input.textContent != "" && isNaN(parseInt(buttonText)) && data.length >= 0) {

//         operator = buttonText;

//         if (data.length > 3) {
//           let result = eval(data.join(" "));
//           clearData();
//           data.push(result);
//           history.textContent = `${data.join(" ")} =  ${result}`;
//           data.push(operator);
//           console.log(data);
//           return;
//         }

//        data.push(input.textContent);

//        let result = eval(data.join(" "));
//        history.textContent = `${data.join(" ")} =  ${result}`;
//     //    clearData();
//        input.textContent = result;
//     //    data.push(result);
//        data.push(operator);
//        input.textContent = "";
//      } else {

//        input.textContent += buttonText;
//      }

//     });

// });
