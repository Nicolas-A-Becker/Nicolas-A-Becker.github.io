class Dog{

    constructor(title, breed, color, age, size){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
    }

    get details(){
        return this.title;
    }

    get item(){
        let dogSection = document.createElement("section");
        dogSection.classList.add("flexed-dog");

        let dogPic = document.createElement("img");
        dogPic.classList.add("flexed-dog");
        dogPic.src = "https://placedog.net/300";
        dogSection.append(dogPic);

        let infoSection = document.createElement("section");
        dogSection.append(infoSection);

        let dogName = document.createElement("h3");
        dogName.innerHTML = this.title;
        infoSection.append(dogName);

        let list = document.createElement("ul");
        infoSection.append(list);

        let breed = document.createElement("li");
        breed.innerHTML = this.breed;
        list.append(breed);

        let color = document.createElement("li");
        color.innerHTML = this.color;
        list.append(color);

        let age = document.createElement("li");
        age.innerHTML = this.color;
        list.append(age);

        let size = document.createElement("li");
        size.innerHTML = this.size;
        list.append(size);

        return dogSection;
    }
}


//after all DOM(document object model) has been loaded
//After all HTML elements have been rendered
window.onload = function(){
    let myDog = new Dog("Tipsy", "Yorkie", "Brown", 5, "Small");
    let yourDog = new Dog("Gabe", "Doge", "Brown", 4, "Medium");
    let otherDog = new Dog("Fluffy", "Corgy", "Black", 3, "Small");
    let dogs = [myDog, yourDog, otherDog];

    let dogListDiv = document.getElementById("dog-list");
    for(dog in dogs){
        dogListDiv.append(dogs[dog].item);
    }
}