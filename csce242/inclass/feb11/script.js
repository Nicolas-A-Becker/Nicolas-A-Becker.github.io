
function displayEmotion(){
    //gather all info
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    console.log(firstName + ", " + favColor + ", " + emotion + ".");
    finalAnswer.innerHTML= `Welcome ${firstName}! <br> You are ${emotion} today.`;
    displayEmoji.innerHTML=`${pickFace(emotion, favColor)}`;
    displayEmoji.classList.remove("red", "green", "blue", "yellow");
    displayEmoji.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == ""){
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    else{
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.add("hidden");
        return false;
    }
}

function pickFace(emotion, favColor){
    const emot = emotion.toLowerCase();
    console.log(emotion);
    if(emot=="happy"){
        return ":)";
    }
    else if(emot=="sad"){
        return ":(";
    }
    else if(emot=="silly"){
        return ":P";
    }
    else if(emot=="angry"){
        return ">:|";
    }
    return ":{}";   
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;
let finalAnswer = document.getElementById("final-answer");