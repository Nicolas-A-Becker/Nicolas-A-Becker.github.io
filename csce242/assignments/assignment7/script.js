function walkingMan(){
    let stickMan = document.getElementById("stick-man");
    stickMan.src = "images/running-stick.png";
    marginNum+=40;
    margin = marginNum.toString()+"px";
    setTimeout(function(){
        stickMan.style.marginLeft = margin;
        stickMan.src = "images/walking-stick.png"
    }, 600);
}

function thermometer(){
    let calculation = 0;
    let percent = document.getElementById("txt-funds-raised").value;
    console.log(percent);

    calculation = percent*100/10000;

    thermo = document.getElementById("thermometer");
    thermo.style.background = `linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) ${calculation}%, rgba(255,255,255,1) ${calculation}%, rgba(255,255,255,1) 100%)`;
}

marginNum = 0;
margin = "0px";
document.getElementById("stick-man").onclick = walkingMan;

document.getElementById("btn-thermo-display").onclick = thermometer;