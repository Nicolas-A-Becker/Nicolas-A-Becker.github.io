function showToys(){
    const toys = ["Drum", "ball", "Car", "Bike"];
    let colorCount = 0;
    let ulElem = document.getElementById("list");

    if(counter%2==0){
        if(document.getElementById("list")==null){
            let ulElem = document.createElement("ul");
            ulElem.after(document.getElementById("btn-show-toys"));
        }
        for(let i in toys){
            let liElem = document.createElement("li");
            liElem.textContent = toys[i];
            if(colorCount%2==0){
                liElem.style.background = "green";
            }
            else{
                liElem.style.background = "teal";
            }
            ulElem.append(liElem);
            colorCount++;
        }
    }
    else if(document.getElementById("list").innerHTML != ""){
        document.getElementById("list").innerHTML = "";
    }
    else{
        let ulElem = document.createElement("ul");
        ulElem.after(document.getElementById("btn-show-toys"));

        for(let i in toys){
            let liElem = document.createElement("li");
            liElem.textContent = toys[i];
            if(colorCount%2==0){
                liElem.style.background = "skyblue";
            }
            else{
                liElem.style.background = "teal";
            }
            ulElem.append(liElem);
            colorCount++;
        }
    }
    counter++;
}

setInterval(showToys, 2000);
var counter = 0;
document.getElementById("btn-show-toys").onclick = showToys;