function changeQuote(){
    let quote = document.getElementById("quotes");
    if(num==0){
        quote.innerHTML = "Those who believe in telekinetics, raise my hand.";
        num++;
    }
    else if(num==1){
        quote.innerHTML = "And so it goes...";
        num++;
    }
    else if(num==2){
        quote.innerHTML = "Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies-God damn it, you've got to be kind.";
        num++;
    }
    else if(num==3){
        quote.innerHTML = "A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.";
        num++;
    }
    else{
        quote.innerHTML = "Of all the words of mice and men, the saddest are, \"It might have been.\"";
        num--;
    }
}

function drawRainbow(){
    redBar = document.createElement("div");
    oranBar = document.createElement("div");
    yellBar = document.createElement("div");
    grenBar = document.createElement("div");
    blueBar = document.createElement("div");
    indiBar = document.createElement("div");
    violBar = document.createElement("div");

    redBar.classList.add("red", "rainbow-bar");
    oranBar.classList.add("orange", "rainbow-bar");
    yellBar.classList.add("yellow", "rainbow-bar");
    grenBar.classList.add("green", "rainbow-bar");
    blueBar.classList.add("blue", "rainbow-bar");
    indiBar.classList.add("indigo", "rainbow-bar");
    violBar.classList.add("violet", "rainbow-bar");

    rainbow = document.getElementById("rainbow");
    rainbow.append(redBar);
    rainbow.append(oranBar);
    rainbow.append(yellBar);
    rainbow.append(grenBar);
    rainbow.append(blueBar);
    rainbow.append(indiBar);
    rainbow.append(violBar);

}

var num = 0;
setInterval(changeQuote, 2000);

drawBow = document.getElementById("btn-draw-bow");
drawBow.onclick = drawRainbow;
