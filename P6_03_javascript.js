// fetch
let url = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="

fetch(url).then(response => response.json()).then(json_response => {
    best_movie_title.textContent = json_response.results[0].title

})






// carousel
document.getElementById("previous1").addEventListener("click", previous1);
document.getElementById("next1").addEventListener("click", next1);
let i = -1
function previous1() {
    i--;
    if (i > -3) {
        console.log(i)
    document.getElementsByClassName("display1")[i].style.display = "initial";
    document.getElementsByClassName("hide1")[i].style.display = "none";
}
    else {
        i = -2
    }
}

function next1() {
    i++;
    if (i < 3) {
        console.log(i)
    document.getElementsByClassName("display1")[i].style.display = "none";
    document.getElementsByClassName("hide1")[i].style.display = "initial";
}
    else {
        i = 3
    }
}
