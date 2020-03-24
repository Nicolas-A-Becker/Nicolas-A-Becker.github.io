class Toy{
    constructor(fileName, toyItem, price, ageRange, rating){
        this.fileName = fileName;
        this.toyItem = toyItem;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
    }

    set fileName(name){
    }
    set toyItem(item){
    }
    set details(details){
    }

    get fileName(){
        return this._fileName;
    }
    get toyItem(){
        return this._toyItem;
    }
    get details(){
        return `Price: ${this.price}\nAge Range: ${this.ageRange}\nRating: ${this.rating} stars`;
    }
}

function buildToyBoxes(){
    for(i=0; i<toyList.length; i++){
        toyBox = document.createElement("section");
        toyBox.classList.add("boxes");
        document.getElementById("toys").append(toyBox);
        
        box = document.createElement("div");
        box.classList.add("middle");
        toyBox.append(box);

        text = document.createElement("p");
        text.innerHTML = toyList[i].details;
        text.append(box);
        
        let imgElem = document.createElement("img");
        imgElem.src = "images/gamecube.jpg";
        imgElem.classList.add("image");
        toyBox.append(imgElem);
    }
}

let beyBlade = new Toy("images/beyBlade.jpg", "Beyblade", 10, "7-15", 3);
let gameBoy = new Toy("images/gamebod.jpg", "Gameboy sp", 25, "7-18", 4);
let gamecube = new Toy("images/gamecube.jpg", "Gamecube", 40, "8-18", 5);
let geoTrax = new Toy("images/geoTrax.jpg", "GeoTrax", 30, "5-13", 4);
let nerfGun = new Toy("images/nerfGun.jpg", "Nerf Gun", 25, "8-15", 3);
let sandBox = new Toy("images/turtleBox.jpg", "Sand Box", 30, "4-10", 3);

let toyList = [beyBlade, gameBoy, gamecube, geoTrax, nerfGun, sandBox];

window.onload = buildToyBoxes;