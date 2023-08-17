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