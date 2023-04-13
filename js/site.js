// get the start and end numbers from the inputs
//Entry point aka controller function

function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  let startNumber = parseInt(startValue); // startNumber = 0
  let endNumber = parseInt(endValue); // endNumber = 100

  if (isNaN(startNumber) == false && Number.isInteger(endNumber)) {
    let numberArray = generateNumbers(startNumber, endNumber);
    displayNumbers(numberArray);
  } else {
    //display an error
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
    });
  }
}

//generate the range of numbers to display
//Business/logic function
function generateNumbers(start, end) {
  let numberBasket = [];

  for (let number = start; number <= end; number = number + 1) {
    numberBasket.push(number); //[0, 1, 2, ...., 100]
  }

  return numberBasket; // => [0, 1, 2, ...., 100]
  //ASK WHAT RETURN AND FOR MEANS
}

//placing the generated on the page And bolding the even numnbers
//View function
function displayNumbers(numbers) {
  //start = 10, end = 15
  //numbers = [10,11,12,13,14,15]
  //numbers.length = 6

  let results = "";

  for (let index = 0; index < numbers.length; index = index + 1) {
    let currentNumber = numbers[index];

    if (currentNumber % 2 == 0) {
      results += `<tr><td class="evenBold">${currentNumber}</td></tr>`;
    } else {
      results += `<tr><td>${currentNumber}</td></tr>`;
    }

   
  }

  let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
}
