function calculateTriangleArea(){
    //get triangle base
    const baseField = document.getElementById('triangle-area');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
 
    // get triangle height 
    const heightField = document.getElementById('triangle-area-h');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    //calculate 
    const area = 0.5 * base * height;
    // console.log(area);
    const showTriangleArea = document.getElementById('tringle-result');
    showTriangleArea.innerText = area;

}

function calculateRectangleArea(){
    //rectangle width
    const rectangleWidthArea = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthArea.value;
    const rectangle = parseFloat(rectangleWidth);
    //rectangle length
    const rectangleLengthArea = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthArea.value;
    const rectangle2 = parseFloat(rectangleLength);
     
    //calculate total multiply
    const totalRectangleArea = rectangle * rectangle2;
    //set the value 
    const newElementSet = document.getElementById('new-Element-Set');
    newElementSet.innerText = totalRectangleArea;
}
//use common function
function calculateParallelogramArea(){
    const base = commonFunctionForAll('Parallelogram-height');

    const height =  commonFunctionForAll('Parallelogram-width');
    //calculate total
    const multiply = base * height;
    //set the value
    setElementInnerText('Parallelogram-area', multiply);
}
//use ellipse card with common function
function calculateEllipseArea(){
    const large = commonFunctionForAll('Ellipse-large');
    const short = commonFunctionForAll('Ellipse-short');
    //calculate total
    const total = 3.14 * large * short;
    const totalTwo = total.toFixed(2)
    //set the value
    setElementInnerText('Ellipse-area', totalTwo);
}




// common function 
function commonFunctionForAll(target){
    const inputField = document.getElementById(target);
    const inputFieldValue = inputField.value;
    const input = parseFloat(inputFieldValue);
    return input;
}
//common set value function
function setElementInnerText(setTarget, area){
    const element = document.getElementById(setTarget);
    element.innerText = area;
}