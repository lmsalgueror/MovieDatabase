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
    document.getElementById("movie-section").innerHTML = " "

    for (let i = 0; i < movieArray.length; i++) {
        idPath = `i=${movieArray[i]}`
        console.log(idPath)
        fetch(`${url}${idPath}`)
            .then(res => res.json())
            .then(data => {
                    document.getElementById("movie-section").innerHTML +=
                        `<div id="movies-list-section" class="flex-organizer movie-list">
                        <div id="img-movie">
                            <img src=${data.Poster} class="img-movie">
                        </div>
    
                        <div id="movie-info" class="movie-info movie-list">
                            <div class="flex-organizer">
                                <p id="movie-title" class="movie-title">${data.Title}</p>
                                <div class="flex-organizer">
                                <i class="fa-solid fa-star"></i>
                                <p id="movie-score" class="light-subtitles">${data.imdbRating}</p>
                                </div>
                            </div>
                            <div class="flex-organizer">
                                <p id="movie-duration" class="light-subtitles">${data.Runtime}</p>
                                <p id="movie-category" class="light-subtitles">${data.Genre}</p>
                                <div class="flex-organizer">
                                    <i class="fa-regular fa-circle-plus plus-watch-list" id="plus-watch-list-${data.imdbID}"></i>
                                    <p class="light-subtitles">Watchlist</p>
                                </div>
                            </div>
            
                            <div id="movie-summary" class="movie-summary">
                            <p>${data.Plot}</p></div>
                        </div>
                    </div>
    
                    <div class="separator-line">
                    </div>`

                    console.log(data)

                }

            )

    }







}

function addToWatchList(id) {
    document.getElementById(id).addEventListener("click", function() {
        console.log("funciona")
    })
}