// fetch
let url = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
let url2 = url + "&page=2"

fetch(url).then(response => response.json()).then(json_response => {
    bandeau_title.textContent = json_response.results[0].title
    img_bandeau.src = json_response.results[0].image_url
    a1.src = json_response.results[1].image_url
    a2.src = json_response.results[2].image_url
    a3.src = json_response.results[3].image_url
    a4.src = json_response.results[4].image_url
})

fetch(url2).then(response => response.json()).then(json_response => {
    a5.src = json_response.results[0].image_url
    a6.src = json_response.results[1].image_url
    a7.src = json_response.results[2].image_url
})


// carousel
let i = 0
function toggle_display(x,i) {
    let start = x + i
    console.log(i)
    let stop = x + (i + 4)
    if (document.getElementById(start).style.display === "none") {
        document.getElementById(start).style.display = "initial";
        document.getElementById(stop).style.display = "none";
    } else {
document.getElementById(start).style.display = "none";
document.getElementById(stop).style.display = "initial";
    }
}

function previous(x) {
    i--;
    if (i >= 0) {
        toggle_display(x,i)
    }
}
function next(x) {
    i++;
    if (i <= 3) {
        toggle_display(x,i)
    }
}
const a = "a"
const b = "b"
const c = "c"
const d = "d"
document.getElementById("previous_a").addEventListener("click", previous(a));
document.getElementById("next_a").addEventListener("click", next(a));
document.getElementById("previous_b").addEventListener("click", previous(b));
document.getElementById("next_b").addEventListener("click", next(b));
document.getElementById("previous_c").addEventListener("click", previous(c));
document.getElementById("next_c").addEventListener("click", next(c));
document.getElementById("previous_d").addEventListener("click", previous(d));
document.getElementById("next_d").addEventListener("click", next(d));
