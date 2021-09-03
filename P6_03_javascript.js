// fetch
const url = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
const url2 = url + "&page=2"

fetch(url).then(response => response.json()).then(json_response => {
   banner_title.textContent = json_response.results[0].title
    img_banner.src = json_response.results[0].image_url
    // ajouter le resume du film sous le bouton play

    banner_modal_img.src = json_response.results[0].image_url // ne marche pas
    banner_modal_title.textContent = "Titre: " + json_response.results[0].title
    banner_modal_category.textContent = "Catégorie: " + json_response.results[0].genres
    banner_modal_date.textContent = "Date de sortie: " + json_response.results[0].date_published
    banner_modal_rated.textContent = "Nombre de votes: " + json_response.results[0].votes
    banner_modal_imbd.textContent = "Note imdb: " + json_response.results[0].imdb_score
    banner_modal_director.textContent = "Réalisateur(s): " + json_response.results[0].directors
    banner_modal_actors.textContent = "Liste des acteurs: " + json_response.results[0].actors
    banner_modal_length.textContent = "Durée: " + json_response.results[0].duration // passer par la fiche détaillé du film grace à son id
    banner_modal_country.textContent = "Pays: " + json_response.results[0].countries
    banner_modal_box.textContent = "Résultats au box office: " + json_response.results[0].worldwide_gross_income
    banner_modal_summary.textContent = "Résumé: " + json_response.results[0].long_description

// worldwide_gross_income = box office

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

const url3 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
const url4 = url3 + "&page=2"

fetch(url3).then(response => response.json()).then(json_response => {
    b1.src = json_response.results[0].image_url
    b2.src = json_response.results[1].image_url
    b3.src = json_response.results[2].image_url
    b4.src = json_response.results[3].image_url
    b5.src = json_response.results[4].image_url
})

fetch(url4).then(response => response.json()).then(json_response => {
    b6.src = json_response.results[0].image_url
    b7.src = json_response.results[1].image_url
})

const url5 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Drama&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
const url6 = url5 + "&page=2"

fetch(url5).then(response => response.json()).then(json_response => {
    c1.src = json_response.results[0].image_url
    c2.src = json_response.results[1].image_url
    c3.src = json_response.results[2].image_url
    c4.src = json_response.results[3].image_url
    c5.src = json_response.results[4].image_url
})

fetch(url6).then(response => response.json()).then(json_response => {
    c6.src = json_response.results[0].image_url
    c7.src = json_response.results[1].image_url
})

const url7 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Family&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
const url8 = url7 + "&page=2"

fetch(url7).then(response => response.json()).then(json_response => {
    d1.src = json_response.results[0].image_url
    d2.src = json_response.results[1].image_url
    d3.src = json_response.results[2].image_url
    d4.src = json_response.results[3].image_url
    d5.src = json_response.results[4].image_url
})

fetch(url8).then(response => response.json()).then(json_response => {
    d6.src = json_response.results[0].image_url
    d7.src = json_response.results[1].image_url
})

// carousel
let i = 0

function toggle_display(x,i) {
    let start = x + i
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

    if (i >= 1) {
        toggle_display(x, i)
        i--;
    }
}
function next(x) {
    if ( i < 3) {
        i++;
        toggle_display(x,i)
    }

}

const a = "a"
const b = "b"
const c = "c"
const d = "d"
document.getElementById("previous_a").addEventListener("click", () => previous(a));
document.getElementById("next_a").addEventListener("click", () => next(a));
document.getElementById("previous_b").addEventListener("click", () => previous(b));
document.getElementById("next_b").addEventListener("click", () => next(b));
document.getElementById("previous_c").addEventListener("click", () => previous(c));
document.getElementById("next_c").addEventListener("click", () => next(c));
document.getElementById("previous_d").addEventListener("click", () => previous(d));
document.getElementById("next_d").addEventListener("click", () => next(d));


// Get the modal
let modal = document.getElementById("banner_modal");

// Get the button that opens the modal
let btn = document.getElementById("play_button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}