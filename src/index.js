const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let breeds = []

document.addEventListener('DOMContentLoaded', function() {   
    fetchImages();
    fetchBreeds();
    
    const ul = document.getElementById('dog-breeds')
    ul.addEventListener('click', e => e.target.style = "color: forestgreen")

    const breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', filterBreeds)
})

function fetchImages() {
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => addImages(json.message))
    .catch((err) => console.error(err))
}

function addImages(imageList) {
    const imageContainer = document.getElementById('dog-image-container')

    for (image of imageList) {
        let element = document.createElement('img')
        element.src = image
        imageContainer.appendChild(element)
    }
}

function fetchBreeds() {
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => addBreeds(json.message))
    .catch((err) => console.error(err))
}

function addBreeds(breedObject) {
    breeds = Object.keys(breedObject)
    renderBreeds(breeds)
}

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    ul.innerHTML = ''
    
    for (breed of breeds) {
        let li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
    }
}

function filterBreeds(e) {
    renderBreeds(breeds.filter((breed) => breed.startsWith(e.target.value)))
}

function filler() {}


