async function showMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let moviesJSON = await response.json();
    let moviesSection = document.getElementById("movie-list");

    //loop through the list of shoes from the json file
    for(i in moviesJSON){
        let movie = moviesJSON[i];
        moviesSection.append(getMovieItem(movie));
    }
}

function getMovieItem(movie){
    let movieSection = document.createElement("section");
    movieSection.classList.add("sections");
    let imgElem = document.createElement("img");


    imgElem.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    movieSection.append(imgElem);
    imgElem.classList.add("images");

    let h2Elem = document.createElement("h2");
    h2Elem.innerText = movie.title;
    movieSection.append(h2Elem);
    h2Elem.classList.add("details");

    //micro or macro movie information
    let pDetails = document.createElement("p");
    pDetails.innerHTML += `Director: ${movie.director}<br>Actors: ${movie.actors}<br>Year: ${movie.year}<br>Genres: ${movie.genres}<br><br>${movie.description}`;
    movieSection.append(pDetails);
    pDetails.classList.add("details");

    return movieSection;
}

function getMovieAddress(movie){
    let pAddress = document.createElement("p");
    pAddress.innerHTML += `${movie.street}<br> ${movie.city}, ${movie.state}<br> ${movie.country} ${movie.postal_code}`;
    return pAddress;
}

window.onload = function(){
    this.showMovies();
}