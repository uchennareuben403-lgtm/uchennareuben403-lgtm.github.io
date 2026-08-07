const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieResult = document.getElementById("movieResult");

const apiKey = "7d3b916e";

searchBtn.addEventListener("click", () => {
    const movie = searchInput.value.trim();

    if (movie === "") {
        alert("Please enter a movie name.");
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                movieResult.innerHTML = "<h2>Movie not found.</h2>";
                return;
            }

            movieResult.innerHTML = `
                <img src="${data.Poster}" alt="${data.Title}">
                <h2>${data.Title}</h2>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p>${data.Plot}</p>
            `;
        })
        .catch(() => {
            movieResult.innerHTML = "<h2>Something went wrong.</h2>";
        });
});