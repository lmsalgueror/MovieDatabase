/*Getting elements */
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input").value

searchBtn.addEventListener("click", function() {
    searchMovie(searchInput)
})

async function searchMovie(movieTitle) {
    const res = await fetch(`http://www.omdbapi.com/?t=${movieTitle}`)
    const data = await res.json()
    alert(data)
}