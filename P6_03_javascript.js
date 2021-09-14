// fetch
let list_url = ["http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Drama&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=", "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Family&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="];
let list_url_nb = [0, 1, 2, 3, 4, 0, 1, 2]

async function find_movie_url_modal(url, i) {
    let response = await fetch(url);
    let data = await response.json();
    find_movie_info(data.results[i].url)
    }

async function find_movie_url_carousel(url, id, i) {
    let response = await fetch(url);
    let data = await response.json();
    if (id === "a5"){
        img_banner.src = data.results[i].image_url
        let banner_response = await fetch(data.results[i].url);
        let banner_data = await banner_response.json()
        banner_title.textContent = banner_data.title;
        banner_description.textContent = "Résumé: " + banner_data.description;
    } else if (id === "a7") {
        a5.src = data.results[0].image_url
        document.getElementById(id).src = data.results[i].image_url
    } else {
    document.getElementById(id).src = data.results[i].image_url
    }
    }



async  function find_movie_info(url) {
       let response = await fetch(url);
    let data = await response.json();
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

       //get the movies img
  let abcd = ["a", "b", "c", "d"];
  abcd.forEach((letter) => {
      for (let i = 0; i < 8; i++) {
        let url_img = list_url[abcd.indexOf(letter)];
      let id = letter + i
          if (i > 5){
              url_img = url_img + "&page=2"
          }
      find_movie_url_carousel(url_img, id, list_url_nb[i])
          }
  })

       function find_movie_id(id) {
    if (id[0] ==="p") {
        let url = list_url[0]
        find_movie_url_modal(url, list_url_nb[0])
    }

    else if (id[0] ==="a"){
        if (id[1] > 4){
            var url_a = list_url[0] + "&page=2"
        } else {
            var url_a = list_url[0]
        }
        find_movie_url_modal(url_a, list_url_nb[id[1]++])
         }
     else if (id[0] ==="b"){
       if (id[1] > 5){
            var url_b = list_url[1] + "&page=2"
        } else {
            var url_b = list_url[1]
        }
        find_movie_url_modal(url_b, list_url_nb[id[1]])
    }
     else if (id[0] ==="c"){
        if (id[1] > 5){
            var url_c = list_url[2] + "&page=2"
        } else {
            var url_c = list_url[2]
        }
        find_movie_url_modal(url_c, list_url_nb[id[1]])
    }
     else if (id[0] ==="d"){
        if (id[1] > 5){
            var url_d = list_url[3] + "&page=2"
        } else {
            var url_d = list_url[3]
        }
        find_movie_url_modal(url_d, list_url_nb[id[1]])
    }
       }

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

// When the user clicks on the button, open the modal
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