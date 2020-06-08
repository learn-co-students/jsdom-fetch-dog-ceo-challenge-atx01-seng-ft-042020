const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const container = document.querySelector('ul#dog-breeds');
const dropdown = document.getElementById('breed-dropdown');

document.addEventListener('DOMContentLoaded', onLoad);

let theDogBreeds = [];

function onLoad(){
    fetchDogs();
    fetchBreeds();
}

function fetchDogs(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json));
};

function renderDogs(dogs){
    const container = document.querySelector('div#dog-image-container');
    console.log(dogs);
    dogs.message.forEach(dog => {
        const img = document.createElement('img');
        img.src = dog;
        container.appendChild(img);
    })
};

function fetchBreeds(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
};

function renderBreeds(breeds){
    console.log(breeds);
        const dogBreeds = Object.keys(breeds.message)
        dogBreeds.forEach( breed => {
        const li = document.createElement('li');
        li.innerHTML = breed;
        container.appendChild(li);
        theDogBreeds.push(li);
    })
};


container.addEventListener('click', (e) => {
    if (e.target.style.color != 'red'){
        e.target.style = 'color: red; font-size: 24px';
    } else {
        e.target.style = 'color: black; font-size: 16px';
    }
});

dropdown.addEventListener('change', (e) => {
    const eTargetValue = e.target.value;
    
    theDogBreeds.forEach(dogBreed => {
        if (dogBreed.innerText[0] === eTargetValue){
            dogBreed.style.display = 'list-item';
        } else {
            dogBreed.style.display = 'none';
        }
    });
});
