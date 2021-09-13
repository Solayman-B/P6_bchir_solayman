// fetch
let list_url = ["http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Drama&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Family&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="];
let list_url_nb = [0, 1, 2, 3, 4, 0, 1, 2]
let list_url_nb_a = {
    l: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 0,
    6: 1,
    7: 2
};
let list_url_nb_b = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 0,
    7: 1
};

/*let url = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
const url2 = url + "&page=2"


fetch(url).then(response => response.json()).then(json_response => {
   banner_title.textContent = json_response.results[0].title
    img_banner.src = json_response.results[0].image_url
    // ajouter le resume du film sous le bouton play


    // créer la modal au clic de l'utilisateur et non l'inverse



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


    a1.src = json_response.results[1].image_url
    a2.src = json_response.results[2].image_url
    a3.src = json_response.results[3].image_url
    a4.src = json_response.results[4].image_url
})

*/
async function find_movie_url_banner(url) {
    let response = await fetch(url);
    let data = await response.json();
    find_movie_info(data.results[0].url)
}

async function find_movie_url(url, i) {
    let response = await fetch(url);
    let data = await response.json();
    find_movie_info(data.results[i].url)
}


async  function find_movie_info(url) {
       let response = await fetch(url);
    let data = await response.json();
    //getelementby id
   modal_img.src = data.image_url
   modal_title.textContent = "Titre: " + data.title
   modal_category.textContent = "Catégorie: " + data.genres
   modal_date.textContent = "Date de sortie: " + data.date_published
   modal_rated.textContent = "Nombre de votes: " + data.votes
   modal_imbd.textContent = "Note imdb: " + data.imdb_score
   modal_director.textContent = "Réalisateur(s): " + data.directors
   modal_actors.textContent = "Liste des acteurs: " + data.actors
   modal_length.textContent = "Durée: " + data.duration + " minutes"
   modal_country.textContent = "Pays: " + data.countries
   modal_box.textContent = "Résultats au box office: " + data.worldwide_gross_income
   modal_summary.textContent = "Résumé: " + data.long_description
       }

       function find_movie_id(id) {
    if (id[0] ==="p") {
        let url = list_url[0]
        find_movie_url(url, list_url_nb[0])
    }

    else if (id[0] ==="a"){
        if (id[1] > 4){
            var url = list_url[0] + "&page=2"
        } else {
            var url = list_url[0]
        }
        find_movie_url(url, list_url_nb[id[1]++])
         }
     else if (id[0] ==="b"){
       if (id[1] > 5){
            var url = list_url[1] + "&page=2"
        } else {
            var url = list_url[1]
        }
        find_movie_url(url, list_url_nb[id[1]])
    }
     else if (id[0] ==="c"){
        if (id[1] > 5){
            var url = list_url[2] + "&page=2"
        } else {
            var url = list_url[2]
        }
        find_movie_url(url, list_url_nb[id[1]])
    }
     else if (id[0] ==="d"){
        if (id[1] > 5){
            var url = list_url[3] + "&page=2"
        } else {
            var url = list_url[3]
        }
        find_movie_url(url, list_url_nb[id[1]])
    }
       }

//find_movie_url_banner("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")

/*fetch(url2).then(response => response.json()).then(json_response => {
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


 */
// carousel
var a = 0
var b = 0
var c = 0
var d = 0
let i = 0

function toggle_display(value) {
    let start = value + window[value]
    let stop = value + (window[value] + 4)
    if (document.getElementById(start).style.display === "none") {
        document.getElementById(start).style.display = "initial";
        document.getElementById(stop).style.display = "none";
    } else {
document.getElementById(start).style.display = "none";
document.getElementById(stop).style.display = "initial";
    }
}

function previous(value) {
    if (i === 2){
         window[value]++;
    }
    i = 1;
    if (window[value] >= 1) {
        window[value]--;
        toggle_display(value)
    }
}
function next(value) {
    if (i === 1){
         window[value]--;
    }
    i = 2;
    if ( window[value] < 3) {
         window[value]++;
        toggle_display(value)
    }

}

document.getElementById("previous_a").addEventListener("click", () => previous("a"));
document.getElementById("next_a").addEventListener("click", () => next("a"));
document.getElementById("previous_b").addEventListener("click", () => previous("b"));
document.getElementById("next_b").addEventListener("click", () => next("b"));
document.getElementById("previous_c").addEventListener("click", () => previous("c"));
document.getElementById("next_c").addEventListener("click", () => next("c"));
document.getElementById("previous_d").addEventListener("click", () => previous("d"));
document.getElementById("next_d").addEventListener("click", () => next("d"));


// Get the modal
let modal = document.getElementById("modal_container");


// Get the button that opens the modal
let btn = document.getElementsByClassName("button");

// Get the <span> element that closes the modal
let span = document.getElementById("close");

// When the user clicks on the button, open the modal              //modifier les données à l'intérieur de la modal
function modal_display(event) {
    find_movie_id(event.srcElement.id)
    modal.style.display = "block";
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', modal_display);
}


// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target === modal) {
     modal.style.display = "none";
   }
 }