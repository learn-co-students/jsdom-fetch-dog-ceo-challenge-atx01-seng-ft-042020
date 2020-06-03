document.addEventListener("DOMContentLoaded", () => {


    console.log('%c HI', 'color: firebrick')

    const dogImages = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    const ul = document.getElementById('dog-breeds');

    fetch(dogImages).then(res => res.json()).then(res => {
        let dogImageContainer = document.getElementById("dog-image-container");
        res.message.forEach(dog => {
            let img = document.createElement('img');
            img.src = dog;
            dogImageContainer.appendChild(img);
        });
    });

    fetch(breedUrl).then(res => res.json()).then(res => {
        Object.keys(res.message).forEach(breed => {
            let li = document.createElement('li');
            li.textContent = breed;
            ul.appendChild(li);
        });
        setColorClickEvent()
        setFilterForBreeds()
        setOptionsForBreedDropdown()
    });

    function setColorClickEvent() {
        ul.addEventListener('click', e => {
            e.target.style.color = 'red';
        });
    }

    function setFilterForBreeds() {
        const allListItems = document.querySelectorAll("#dog-breeds li");
        let select = document.getElementById("breed-dropdown");
        select.addEventListener("change", e => {
            allListItems.forEach(li => {
                if (e.target.value === "all") {
                    li.style.display = 'block';
                } else if (li.textContent[0] === e.target.value) {
                    li.style.display = 'block';
                } else {
                    li.style.display = 'none';
                }
            })
        });
    }

    function setOptionsForBreedDropdown() {
        const allListItems = document.querySelectorAll("#dog-breeds li");
        let select = document.getElementById("breed-dropdown");
        let firstLetter = [...allListItems].map(li => li.textContent[0]).filter((letter, index, arr) => {
            return arr.indexOf(letter) == index;
        });
        firstLetter.forEach(letter => {
            let option = document.createElement('option');
            option.value = letter;
            option.innerText = letter;
            select.appendChild(option);
        });
    }

}); // end of DOMContentLoaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


