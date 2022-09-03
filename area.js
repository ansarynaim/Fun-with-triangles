const sides = document.querySelectorAll('.side-input')
const outputEl = document.querySelector('#output')
const areaBtn = document.querySelector('#area-btn')

function calculateArea(base, height){
    const multiplicationOfHeightBase = base * height;
    return multiplicationOfHeightBase;
}

function calculateAreaOfTriangle(){
    const multiplicationOfHeightBase = calculateArea(Number(sides[0].value), Number(sides[1].value))
    const area = 1/2*multiplicationOfHeightBase;
    outputEl.innerText = "The Area of Triangle is " + area
}


areaBtn.addEventListener("click", calculateAreaOfTriangle)