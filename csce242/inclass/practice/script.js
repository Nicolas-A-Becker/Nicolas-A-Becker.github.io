function displayEmotion(){
    const color = document.getElementById("txt-color").value;

    if(color == "red"){
        console.log("angry");
    }
    else if(color == "green"){
        console.log("happy");
    }
    else if(color == "purple"){
        console.log("royal");
    }
    else if(color == "blue"){
        console.log("sad");
    }
    else{
        console.log("invalid emotion/color");
    }
}


const btnEmotion = document.getElementById("btn-emotion");
btnEmotion.onclick = displayEmotion;