function SP(side){
    return side*4;
}
function squarePerimeterCalculate(){
    const numberside=document.getElementById("squareInput");
    const result= parseInt(numberside.value);

    const perimeter = SP(result);
    document.getElementById("SP").innerText= "It's perimeter is " + perimeter + " cm";
}

function SA(side){
    return side*side;
}
function squareAreaCalculate(){
    const numberside=document.getElementById("squareInput");
    const result=parseInt(numberside.value);
    
    const area =SA(result);
    document.getElementById("SA").innerText="The Area of the Square is "+area+" cm^2";
}

  function CP(radio){
    return Math.PI*2*radio;
}

function circlePerimeterCalculate(){
    const numberside=document.getElementById("circleInput");
    const result= parseInt(numberside.value);

    const perimeter = CP(result);
    document.getElementById("CP").innerText= "It's perimeter is " + perimeter + " cm";
}

function CA(radio){
    return Math.PI*Math.pow(radio,2);
}
function circleAreaCalculate(){
    const numberside=document.getElementById("circleInput");
    const result=parseInt(numberside.value);
    
    const area =CA(result);
    document.getElementById("CA").innerText="The Area of the circle is "+area+" cm^2";
}

function TP (side1, side2, base) {
    return side1 + side2 + base;
}

function trianglePerimeterCalculate() {
    const side1 = parseInt(document.getElementById("triangleInput1").value);
    const side2 = parseInt(document.getElementById("triangleInput2").value);
    const base = parseInt(document.getElementById("triangleInputB").value);

    const perimeter = TP(side1,side2,base);

    document.getElementById("TP").innerText = "Its perimeter is: " + perimeter + " cm.";
}
function TA (base, h) {
    return (base * h) / 2;
}
function triangleAreaCalculate() {
    const base = parseInt(document.getElementById("triangleInputB").value);
    const h = parseInt(document.getElementById("triangleInputH").value);

    const area = TA(base, h);

    document.getElementById("TA").innerText = "Its area is "+area+" cm^2";
}

function clearSquare(){
    const cleanParagrahp1 = document.getElementById("SA");
    const cleanParagrahp2 = document.getElementById("SP");
    let display = document.getElementById("squareInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function clearCircle(){
    const cleanParagrahp1 = document.getElementById("CA");
    const cleanParagrahp2 = document.getElementById("CP");
    let display = document.getElementById("circleInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function clearTriangle(){
    const cleanParagrahp1 = document.getElementById("TA");
    const cleanParagrahp2 = document.getElementById("TP");
    const TRII = document.getElementById("triangleInput1");
    const TRI2 = document.getElementById("triangleInput2");
    const TRIB = document.getElementById("triangleInputB");
    const TRIH = document.getElementById("triangleInputH");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    TRII.value="";
    TRI2.value="";
    TRIB.value="";
    TRIH.value="";
}