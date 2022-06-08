// function getJoke (event) {    
//     event.preventDefault()
//     let url = "https://api.chucknorris.io/jokes/random"
//  const url = "https://api.chucknorris.io/jokes/random"
//     ///FETCH code
//     fetch(url)
//     .then(res => {
//         return res.json();
//     })
//         .then(data => console.log(data))
//         .catch(err => {
//           console.log("something went wrong...", err);
//         });


function getJoke (event) {
    // event.preventDefault()
    let url = "https://api.chucknorris.io/jokes/random"
    fetch(url)
    .then(res => res.json())
    .then(res => {
        document.querySelector('h1').innerHTML = res.value
    })
        .catch(err => {
          console.log("something went wrong...", err);
        });    
}

getJoke()
        
           