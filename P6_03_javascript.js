// A URL returns JSON data.
var url = "http://localhost:8000/api/v1/titles/";


function doGetJSON()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);

        if(!response.ok) {
           throw new Error("HTTP error, status = " + response.status);
        }
        // Get JSON Promise from response object:
        var myJSON_promise = response.json();

        // Returns a Promise object.
        return myJSON_promise;
    })
    .then(function(myJSON) {
        console.log("OK! JSON:");
        console.log(myJSON);
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });

}












document.getElementById("next1").addEventListener("click", next);
let i = 0
function next() {
    if (i < 3) {
        console.log(i)
    document.getElementsByClassName("display")[i].style.display = "none";
    document.getElementsByClassName("hide")[i].style.display = "initial";
    i++;
}
}
