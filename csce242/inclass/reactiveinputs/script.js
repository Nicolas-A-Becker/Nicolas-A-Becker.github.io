
function displaySong(){
    //gather all info
    const artist = document.getElementById("txt-artist").value;
    const favSong = document.getElementById("txt-song").value;

    console.log(`${artist} and ${favSong}`);

    const firstBox = isBlank(artist, "error-artist");
    const secondBox = isBlank(favSong, "error-song");

    if(firstBox || secondBox) return;

    finalAnswer.innerHTML = `You like ${favSong} by ${artist}.`;
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

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displaySong;
let finalAnswer = document.getElementById("final-answer");