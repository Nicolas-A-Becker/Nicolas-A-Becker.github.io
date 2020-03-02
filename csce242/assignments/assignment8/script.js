function changeQuote(){
    setTimeout(function(){
        num++;
    }, 600);
    let num = 0;
    let quote = document.getElementById("quotes");
    if(num==0){
        quote = "0";
    }
    else if(num==1){
        quote = "1";
    }
    else if(num==2){
        quote = "2";
    }
    else if(num==3){
        quote = "3";
    }
    else{
        quote = "4/else";
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
}

let num = changeQuote();