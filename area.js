const sides = document.querySelectorAll(".side-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");

function calculateAreaOfTriangle() {
  if (sides[0].value > 0 && sides[1].value > 0) {
    const multiplicationOfHeightBase = calculateArea(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const area = Math.round((1 / 2) * multiplicationOfHeightBase);
    outputEl.innerText = "The Area of Triangle is " + area;
  } else {
    outputEl.innerText =
      "The value of both sides must be greater than zero and should not be empty";
  }
}

function calculateArea(base, height) {
  const multiplicationOfHeightBase = base * height;
  return multiplicationOfHeightBase;
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);
