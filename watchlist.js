console.log("hola mundo")
let newWatchList = localStorage.getItem('watchListArray')
console.log(newWatchList)
let newArray = JSON.parse(newWatchList)

function renderWatchList() {
    document.getElementById("watchlist-movie-section").innerHTML = " "
    for (let t = 0; t < newArray.length; t++) {
        document.getElementById("watchlist-movie-section").innerHTML += `<div id="movies-list-section" class="flex-organizer movie-list">
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

}

if (newArray.length != 0) {
    renderWatchList()
}