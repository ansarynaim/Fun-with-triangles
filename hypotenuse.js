const sides = document.querySelectorAll(".side-input");
const hypotenuse = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateHypotenuse() {
  if (sides[0].value > 0 && sides[1].value > 0) {
    if (sides[0].value && sides[1].value) {
      const sumOfSquares = calculateSumOfSquare(
        Number(sides[0].value),
        Number(sides[1].value)
      );
      const lengthOfHypotenuse = Math.round(Math.sqrt(sumOfSquares));
      outputEl.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
    } else {
      outputEl.innerText = "The value of sides should not be empty ";
    }
  } else {
    outputEl.innerText =
      "the value of sides should not be less than or equal to 0";
  }
}

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

hypotenuse.addEventListener("click", calculateHypotenuse);
