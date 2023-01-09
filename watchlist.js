import { watchListArray } from "./index.js"

function renderWatchList() {
    for (let t = 0; t < watchListArray.length; t++) {
        document.getElementById("watchlist-movie-section").innerHTML = `<div id="movies-list-section" class="flex-organizer movie-list">
        <div id="img-movie">
            <img src=${watchListArray[t].poster} class="img-movie">
        </div>

        <div id="movie-info" class="movie-info movie-list">
            <div class="flex-organizer">
                <p id="movie-title" class="movie-title">${watchListArray[t].name}</p>
                <div class="flex-organizer">
                <i class="fa-solid fa-star"></i>
                <p id="movie-score" class="light-subtitles">${watchListArray[t].score}</p>
                </div>
            </div>
            <div class="flex-organizer">
                <p id="movie-duration" class="light-subtitles">${watchListArray[t].duration}</p>
                <p id="movie-category" class="light-subtitles">${watchListArray[t].genre}</p>
                <div class="flex-organizer">
                    <i class="fa-regular fa-circle-plus plus-watch-list" id=${watchListArray[t].imdbID}></i>
                    <p class="light-subtitles">Watchlist</p>
                </div>
            </div>

            <div id="movie-summary" class="movie-summary">
            <p>${watchListArray[t].plot}</p></div>
        </div>
    </div>

    <div class="separator-line">
    </div>`

    }

}

renderWatchList()