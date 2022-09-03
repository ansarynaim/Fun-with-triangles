const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector('#is-traingle-btn');
const outputEl = document.querySelector('#output');


function calculateSumOfAngles(angle1, angle2, angle3){
  const sumOfAngles = angle1+angle2+angle3;
  return sumOfAngles;
}

function isTraingle(){
  const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

  if(sumOfAngles === 180){
    outputEl.innerText = "Hurray! , the angles form a traingle 😃"
  } else{
    outputEl.innerText = "Ooops! Sorry! Angles don't form a traingle 🙄"
  }

}


isTraingleBtn.addEventListener("click", isTraingle)