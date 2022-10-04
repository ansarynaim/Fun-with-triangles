const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-traingle-btn");
const outputEl = document.querySelector("#output");

function isTriangle() {
  if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0) {
    const sumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if (sumOfAngles === 180) {
      outputEl.innerText = "Given angles will form a triangle.";
    } else {
      outputEl.innerText = "Given angles will not form a triangle.";
    }
  } else {
    outputEl.innerText =
      "Any of the angle should not be less than  0 and field should not be empty";
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

isTraingleBtn.addEventListener("click", isTriangle);
