///////////////////////////////////////////////////////////////
/*
don't use this!

document.write("Hello World");
*/
///////////////////////////////////////////////////////////////
/*
pop-up window(blocks content until alert is OK'd)
don't use outside of debugging(ugly)

alert("Hello World!");
*/
///////////////////////////////////////////////////////////////
/*
creating variables
var -> let
const -- everything should be a const unless it will change
*/
///////////////////////////////////////////////////////////////
/*
let myHeader=document.getElementById("my-header");

myHeader.innerHTML="Penguins";
*/
///////////////////////////////////////////////////////////////
/*
let special=document.getElementById("special");

special.innerHTML="Penguins";
*/
///////////////////////////////////////////////////////////////

function showBoy(){
    //console.log useful for debugging(writes to the console)
    console.log("Boy Fucntion");
    title.innerHTML="Boy Stuff";
    item1.innerHTML="Trucks";
    item2.innerHTML="Trains";
    item3.innerHTML="Tools";
}

function showGirl(){
    console.log("Girl Function");
    title.innerHTML="Girl Stuff";
    item1.innerHTML="Dolls";
    item2.innerHTML="Sparkles";
    item3.innerHTML="Pink";
}

function swapFace(){
    console.log("Emoji swap function");
    if(btnFace.innerHTML == "¯\\_(ツ)_/¯"){
        check = 1;
        btnFace.innerHTML="¯\\(°_o)/¯";
    }
    else{
        check = 0;
        btnFace.innerHTML="¯\\_(ツ)_/¯";
    }
}

function swapPicFace(){
    console.log("Face pic button function");
    if(btnPic.innerHTML=="<img src=\"images/sadFace.png\">"){
        btnPic.innerHTML="<img src=\"images/smileFace.png\">";
    }
    else if(btnPic.innerHTML=="<img src=\"images/smileFace.png\">"){
        btnPic.innerHTML="<img src=\"images/sleepyFace.png\">";
    }
    else if(btnPic.innerHTML=="<img src=\"images/sleepyFace.png\">"){
        btnPic.innerHTML="<img src=\"images/upsideDownFace.png\">";
    }
    else if(btnPic.innerHTML=="<img src=\"images/upsideDownFace.png\">"){
        btnPic.innerHTML="<img src=\"images/sadFace.png\">";
    }
}

let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let title = document.getElementById("title");

//emoji button swap element
let btnFace = document.getElementById("btn-face");

let btnPic = document.getElementById("btn-pic-face");

//parentheses call function on load -> showBoy(); writes to console immediately
btnBoy.onclick = showBoy;
btnGirl.onclick = showGirl;

btnFace.onclick = swapFace;

btnPic.onclick = swapPicFace;