let newWatchList = localStorage.getItem('watchListArray')
let newArray = JSON.parse(newWatchList)

/*Assigning elements */
let watchlistMovieSection = document.getElementById("watchlist-movie-section")
let findFilmBtn = document.getElementById("find-film-button")
let idMovies = []

function renderWatchList() {
    watchlistMovieSection.innerHTML = " "
    let watchlistCard = document.createElement("div")
    for (let t = 0; t < newArray.length; t++) {
        watchlistCard.innerHTML += `<div id="movies-list-section" class="flex-organizer movie-list">
        <div id="img-movie">
            <img src=${newArray[t].poster} class="img-movie">
        </div>

        <div id="movie-info" class="movie-info movie-list">
            <div class="flex-organizer">
                <p id="movie-title" class="movie-title">${newArray[t].name}</p>
                <div class="flex-organizer">
                <i class="fa-solid fa-star"></i>
                <p id="movie-score" class="light-subtitles">${newArray[t].score}</p>
                </div>
            </div>
            <div class="flex-organizer">
                <p id="movie-duration" class="light-subtitles">${newArray[t].duration}</p>
                <p id="movie-category" class="light-subtitles">${newArray[t].genre}</p>
                <div class="flex-organizer">
                    <i class="fa-solid fa-circle-minus plus-watch-list" id=${newArray[t].imdbID}></i>
                    <p class="light-subtitles">Remove</p>
                </div>
            </div>

            <div id="movie-summary" class="movie-summary">
            <p>${newArray[t].plot}</p></div>
        </div>
    </div>

    <div class="separator-line">
    </div>`

    }

    return watchlistCard

}

if (newArray.length != 0) {
    watchlistMovieSection.appendChild(renderWatchList())

    for (let i = 0; i < newArray.length; i++) {
        idMovies.push(document.getElementById(newArray[i].imdbID))
        console.log(idMovies)
    }
    removeFilm()
}

findFilmBtn.addEventListener("click", openFindFilm)

function openFindFilm() {
    localStorage.setItem('watchListArray', JSON.stringify(newArray))
    console.log(newArray)
    window.open('index.html', "_self")
}

function removeFilm() {
    idMovies.forEach(idMovieElement => idMovieElement.addEventListener("click", function() {
        console.log("remueve la movie")
        let movieToRemove = newArray.find(element => element.imdbID === idMovieElement.getAttribute("id"))
        console.log(movieToRemove)
        newArray.pop(movieToRemove)
        console.log(newArray)
    }))
}