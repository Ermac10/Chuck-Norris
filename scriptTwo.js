function getJoke (event) {
    // event.preventDefault()
    let url = "https://api.chucknorris.io/jokes/random"
    fetch(url)
    .then(res => res.json())
    .then(res => {
        document.querySelector('p').innerHTML = res.value
    })
        .catch(err => {
          console.log("something went wrong...", err);
        });    
}
getJoke()

// create a variable for the modal -- im putting it equal to "jokeContainer", which is a div in the html that will contain all of the modal display info
const modal = document.getElementById("jokeContainer");
// create a function for opening the modal -- in this case i just want it to display in a block style (i was thinking about seeing how i could change that, maybe make it oval or something)
const openModal = () => {
    modal.style.display = "block"
}
// create a function to close the modal -- just set it to display none so it disappears off the screen
const closeModal = () => {
    window.location.reload()
    modal.style.display = "none"
}

const openButton = document.getElementById("norrisBtn");

openButton.addEventListener("click", openModal)

const closeButton = document.getElementById("close");

closeButton.addEventListener("click", closeModal)

closeButton.onclick = (function outer() {
    let counter = localStorage.getItem('count');
    return function inner() {
        counter++;
        localStorage.setItem('count', counter)
    };
})();

function newEnemy () {
    let clickCount = localStorage.getItem('count')
    if (clickCount == 5){
    location.href ='/Users/makaylaclausen/Desktop/SEI/Projects/chuckNorris/indexThree.html'
    }
}

newEnemy()
// console.log(localStorage.getItem('count'))