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
/* if clique next
if i < 4
i++;
img i invisible
img i+4 visible
décale i+1 i+2 i+3 i+4 vers la gauche

if clique previous
if i > 0
i--;
img i visible
img i+4 invisible
décale i+1 i+2 i+3 i+4 vers la droite
 */