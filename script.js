const form = document.querySelector('.form')
const input = document.querySelector('#form-input')
const ul = document.querySelector('#movies')

async function fetchMovie(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=b58710e2`

    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}
async function renderMovies(title) {
    const movies = await fetchMovie(title)
    let newContent = ""
    for (const filme of movies) {
        newContent += `<li class="app-movies-card">`
               newContent += `<figure class="app-movies-figure">`
        newContent += `<img class="app-movies-thumb" src="${filme.Poster}">`
        newContent += `</figure>`
        newContent += `<legend class="app-movies-legend">`
        newContent += `<span class="app-movies-year">${filme.Year}</span>`
        newContent += `<h2 class="app-movies-all-title">${filme.Title}</h2>`
        newContent += `</legend">`
        newContent += `</li">`
    }
   ul.innerHTML = newContent

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    renderMovies(input.value)
})
