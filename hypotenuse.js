const sides = document.querySelectorAll('.side-input')
const hypotenuse = document.querySelector('#hypotenuse-btn')
const outputEl = document.querySelector('#output')


function calculateSumOfSquare(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    outputEl.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse
    console.log(sumOfSquares)
}


hypotenuse.addEventListener("click", calculateHypotenuse)