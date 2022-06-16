const startButton = document.getElementById('start').addEventListener('click', playGame)

function playGame() {
    let counter = 0
    localStorage.setItem('count', counter)
    alert("Chuck Norris is ready to hand you a fistfull of jokes. Unleash your fury and clickjab Chuck in the face to get him to speak.");
    location.href = 'indexTwo.html'
}





        
           