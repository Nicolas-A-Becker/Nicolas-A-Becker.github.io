
function displayEmotion(){
    //gather all info
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    console.log(firstName + ", " + favColor + ", " + emotion + ".");
    finalAnswer.innerHTML= `${firstName}, your favorite color is ${favColor} and you are ${emotion}.`;

    /*
    let price = parseFloat(document.getElementById("txt-price").value);
    parseInt(...) ^
    let tax = document.getElementById("tax-span").textContent;
    */
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;
let finalAnswer = document.getElementById("final-answer");