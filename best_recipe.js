$.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json?category=inspire",
    dataType: "JSON",
    success: function(response){
    console.log(response);
    text(response.contents.quotes[0].quote, response.contents.quotes[0].author);
    },
    error: function(error){
      console.log("Error: " + error);
    }
   });
 
  function text(argument,argument1){
 var heading=$("<h3/>").text(' " ' + argument + ' \" ');
 $("#quotes").append(heading);
 var author=$("<h5/>").text(argument1);
 $("#author").append(author);
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  food(response.meals[0].strMeal);
  },
  error: function(error){
    console.log("Error: " + error);
  }
 });

function food(argument){
var name = $("<h3/>").text(argument  );
$(".modal-content").append(name);
//var author=$("<h5/>").text(argument1);
//$("#author").append(author);
}