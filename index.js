import Movie from "./Movie.js"

/*Getting elements */
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const watchListBtn = document.getElementById("watchlist-button")
let movieArray = []
const url = "http://www.omdbapi.com/?apikey=3c9105c1&"
let movieElements = []
let allMovies = []
let watchListArray = []

// if (watchListArray.length != 0) {
//     let newArray = localStorage.getItem('watchListArray')
//     watchListArray = JSON.parse(newArray)
//     console.log("lina")
//     console.log(watchListArray)
// }

if (searchBtn) {
    searchBtn.addEventListener("click", function() { searchMovie(searchInput.value) });
}

async function searchMovie(movieTitle) {
    allMovies = []
    movieElements = []
    movieTitle = movieTitle.replace(" ", "+")
    const res = await fetch(`${url}s=${movieTitle}`)
    const data = await res.json()
    movieArray = data.Search
    movieArray = movieArray.map(movie => movie.imdbID)
    let idPath = ""
    document.getElementById("movie-section").innerHTML = " "

    for (let i = 0; i < movieArray.length; i++) {
        idPath = `i=${movieArray[i]}`
        console.log(idPath)
        await fetch(`${url}${idPath}`)
            .then(res => res.json())
            .then(data => {
                    let movie = new Movie()
                    movie = {
                        name: data.Title,
                        score: data.imdbRating,
                        duration: data.Runtime,
                        genre: data.Genre,
                        imdbID: data.imdbID,
                        plot: data.Plot,
                        poster: data.Poster
                    }
                    console.log(movie)
                    allMovies.push(movie)
                    document.getElementById("movie-section").appendChild(drawMovieCard(movie))
                    movieElements.push(document.getElementById(data.imdbID))
                }

            )
    }
    addListerToMovieCards()

}

function drawMovieCard(aMovie) {
    let movieCard = document.createElement('div')
    movieCard.innerHTML = `<div id="movies-list-section" class="flex-organizer movie-list">
            <div id="img-movie">
                <img src=${aMovie.poster} class="img-movie">
            </div>

            <div id="movie-info" class="movie-info movie-list">
                <div class="flex-organizer">
                    <p id="movie-title" class="movie-title">${aMovie.name}</p>
                    <div class="flex-organizer">
                    <i class="fa-solid fa-star"></i>
                    <p id="movie-score" class="light-subtitles">${aMovie.score}</p>
                    </div>
                </div>
                <div class="flex-organizer">
                    <p id="movie-duration" class="light-subtitles">${aMovie.duration}</p>
                    <p id="movie-category" class="light-subtitles">${aMovie.genre}</p>
                    <div class="flex-organizer">
                        <i class="fa-regular fa-circle-plus plus-watch-list" id=${aMovie.imdbID}></i>
                        <p class="light-subtitles">Watchlist</p>
                    </div>
                </div>

                <div id="movie-summary" class="movie-summary">
                <p>${aMovie.plot}</p></div>
            </div>
        </div>

        <div class="separator-line">
        </div>`


    return movieCard

}

function addListerToMovieCards() {
    movieElements.forEach(movieElement => {
        movieElement.addEventListener("click", function() {
            console.log("funciona")
            let likedMovie = allMovies.find(element => element.imdbID === movieElement.getAttribute("id"))
            console.log(likedMovie)
            watchListArray.push(likedMovie)
            console.log(watchListArray)

        })
    })
}


if (watchListBtn) {
    watchListBtn.addEventListener("click", openWatchlist)
}

function openWatchlist() {
    localStorage.setItem('watchListArray', JSON.stringify(watchListArray))
    window.open('watchlist.html', "_self")
}