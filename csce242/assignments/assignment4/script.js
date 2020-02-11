function addTax(){
    //gather filled info boxes
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    const productCount = parseFloat(document.getElementById("txt-product-count").value);
    const productPrice = parseFloat(document.getElementById("txt-product-price").value);

    console.log(`${firstName}, ${lastName}, ${productName}, ${productCount}, ${productPrice}.`);
    finalNumber = (tax+productPrice)*productCount;
    finalAnswer.innerHTML = `${firstName} ${lastName} ordered ${productName}(s) totalling: $${finalNumber}.`;
}

const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.onclick = addTax;
let finalAnswer = document.getElementById("final-answer");
const tax = 0.07;
let finalNumber = 0.0;