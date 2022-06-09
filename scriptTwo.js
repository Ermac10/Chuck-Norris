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

const modal = document.getElementById("jokeContainer");
const openModal = () => {
    modal.style.display = "block"
}
// create a function to close the modal
const closeModal = () => {
    modal.style.display = "none"
}
const openButton = document.getElementById("norrisBtn");
// add an event listener to that button that calls openModal
openButton.addEventListener("click", openModal)
// grab the close button
const closeButton = document.getElementById("close");
// add an event listener to it that calls closeModal
closeButton.addEventListener("click", closeModal)

// const startButton = document.getElementById('start').addEventListener('click', playGame)

// function playGame() {
//     location.href = '/Users/makaylaclausen/Desktop/SEI/Projects/chuckNorris/indexTwo.html'
// }