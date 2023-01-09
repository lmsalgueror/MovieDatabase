/*Getting elements */
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
let movieArray = []
const url = "http://www.omdbapi.com/?apikey=3c9105c1&"

searchBtn.addEventListener("click", function() { searchMovie(searchInput.value) })

async function searchMovie(movieTitle) {
    movieTitle = movieTitle.replace(" ", "+")
    console.log(movieTitle)
    const res = await fetch(`${url}s=${movieTitle}`)
    const data = await res.json()
    movieArray = data.Search
    console.log(movieArray)
    movieArray = movieArray.map(movie => movie.imdbID)
    console.log(movieArray)
    let idPath = ""

    for (let i = 0; i < movieArray.length; i++) {
        idPath = `i=${movieArray[i]}`
        console.log(idPath)
        fetch(`${url}${idPath}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("movie-section").innerHTML += `<div id="movies-list-section">
                <div id="img-movie">
                <img src=${data.Poster}>
    
                </div>
    
                <div id="movie-info">
                    <div>
                        <h1 id="movie-title">${data.Title}</h1>
                        <i></i>
                        <p id="movie-score">${data.imdbRating}</p>
                    </div>
                    <div>
                        <p id="movie-duration">${data.Runtime}</p>
                        <p id="movie-category">${data.Genre}</p>
                        <div>
                            <i></i>
                            <p>Watchlist</p>
                        </div>
                    </div>
    
                    <div id="movie-summary">
                    <p>${data.Plot}</p></div>
                </div>
            </div>
    
            <div class="separator-line"></div>`

                console.log(data)
            })
    }



}