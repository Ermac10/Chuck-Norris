// function getJoke (event) {    
//     event.preventDefault()
//     let url = "https://api.chucknorris.io/jokes/random"
 const url = "https://api.chucknorris.io/jokes/random"
    ///FETCH code
    fetch(url)
    .then(res => {
        return res.json();
    })
        .then(data => console.log(data))
        .catch(err => {
          console.log("something went wrong...", err);
        });