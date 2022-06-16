const leeArray = [
  'Dragon seeks path. Hi-yah! Dragon whips his tail!',
  'Let him know. If I ever see him here again... HE WON\'T LEAVE ALIVE!',
  'These slums are just like ours',
  'Its a waste. All of this. In Hong Kong, I would build on it. Make money.',
  'Knowing is not enough, we must apply. Willing is not enough, we must do.',
  'The key to immortality is first living a life worth remembering',
  'You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.',
  'Notice that the stiffest tree is most easily cracked. While the bamboo or willow survives by bending with the wind.',
  'Don\’t fear failure. — Not failure, but low aim, is the crime. In great attempts, it is glorious even to fail.',
  'A goal is not always meant to be reached, it often serves simply as something to aim at.',
]

function getJoke (event) {
  // event.preventDefault()
  let url = "https://api.chucknorris.io/jokes/random"
  fetch(url)
  .then(res => res.json())
  .then(res => {
      document.querySelector('#norrisJoke').innerHTML = res.value
  })
      .catch(err => {
        console.log("something went wrong...", err);
      });    
}
getJoke()

// function getQuote () {
//   let randomQuote = leeArray[Math.floor(Math.random()*leeArray.length)];
//   document.querySelector('#leeQuote').innerHTML = randomQuote
// }
// getQuote()

//Norris Modal below
const dialogueModal = document.getElementById("Container");

const openModal = () => {
  dialogueModal.style.display = "block"
    let randomQuote = leeArray[Math.floor(Math.random()*leeArray.length)];
    document.querySelector('#leeQuote').innerHTML = randomQuote
 }

const closeModal = () => {
  window.location.reload()
  dialogueModal.style.display = "none"
}

const dialogueOpenButton = document.getElementById("norrisBtnTwo");

dialogueOpenButton.addEventListener("click", openModal)

const dialogueCloseButton = document.getElementById("close");

dialogueCloseButton.addEventListener("click", closeModal)

// lee Modal below
// const leeModal = document.getElementById("quoteContainer");

// const openLeeModal = () => {
//   leeModal.style.display = "block";
//   console.log('kjb')
// }

// const closeLeeModal = () => {
//   window.location.reload();
//   leeModal.style.display = "none";
// }

const leeOpenButton = document.getElementById("leeBtn");

leeOpenButton.addEventListener("click", openModal);

const leeCloseButton = document.getElementById("close");

leeCloseButton.addEventListener("click", closeModal)