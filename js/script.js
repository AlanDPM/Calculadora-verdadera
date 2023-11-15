function SPer(side){
    return side*4;
}
function SPCalculate(){
    const numberside=document.getElementById("squareInput");
    const result= parseInt(numberside.value);

    const perimeter = SPer(result);
    document.getElementById("SPer").innerText= "It's perimeter is " + perimeter + " cm";
}

function SArea(side){
    return side*side;
}
function SACalculate(){
    const numberside=document.getElementById("squareInput");
    const result=parseInt(numberside.value);
    
    const area =SArea(result);
    document.getElementById("SArea").innerText="The Area of the Square is "+area+" cm^2";
}

  function CPer(radio){
    return Math.PI*2*radio;
}

function CPCalculate(){
    const numberside=document.getElementById("circleInput");
    const result= parseInt(numberside.value);

    const perimeter = CPer(result);
    document.getElementById("CPer").innerText= "It's perimeter is " + perimeter + " cm";
}

function CArea(radio){
    return Math.PI*Math.pow(radio,2);
}
function CACalculate(){
    const numberside=document.getElementById("circleInput");
    const result=parseInt(numberside.value);
    
    const area =CArea(result);
    document.getElementById("CArea").innerText="The Area of the circle is "+area+" cm^2";
}

function TPer (side1, side2, base) {
    return side1 + side2 + base;
}

function TPCalculate() {
    const side1 = parseInt(document.getElementById("triangleInput1").value);
    const side2 = parseInt(document.getElementById("triangleInput2").value);
    const base = parseInt(document.getElementById("triangleInputB").value);

    const perimeter = TPer(side1,side2,base);

    document.getElementById("TPer").innerText = "Its perimeter is: " + perimeter + " cm.";
}
function TArea (base, h) {
    return (base * h) / 2;
}
function TACalculate() {
    const base = parseInt(document.getElementById("triangleInputB").value);
    const altura = parseInt(document.getElementById("triangleInputH").value);

    const area = TArea(base, altura);

    document.getElementById("TArea").innerText = "Its area is "+area+" cm^2";
}

function clearS(){
    const cleanParagrahp1 = document.getElementById("SArea");
    const cleanParagrahp2 = document.getElementById("SPer");
    let display = document.getElementById("squareInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function clearC(){
    const cleanParagrahp1 = document.getElementById("CArea");
    const cleanParagrahp2 = document.getElementById("CPer");
    let display = document.getElementById("circleInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function clearT(){
    const cleanParagrahp1 = document.getElementById("TArea");
    const cleanParagrahp2 = document.getElementById("TPer");
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